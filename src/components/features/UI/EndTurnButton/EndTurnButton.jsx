import "./EndTurnButton.css";
import { useDispatch } from "react-redux";
import { closeYourTurn } from "../../counter/counterSlice";
import { useSelector } from "react-redux";
import {
  addHealth,
  syncCardBaseLenght,
  advanceScenarioMove,
  drawCard,
  playCardToBoard,
  clickBoardCard,
  clickedProfile,
} from "../../hand/handSlice";
import { useEffect } from "react";
import { increment, openYourTurn } from "../../counter/counterSlice";
import { useState } from "react";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function EndTurnButton() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const playerCardBaseCount = useSelector(
    (state) => state.hand.cardBaseCount.player
  );
  const enemyCardBaseCount = useSelector(
    (state) => state.hand.cardBaseCount.enemy
  );
  const enemyBoardCard = useSelector((state) => state.hand.board.enemy);
  const playerBoardCard = useSelector((state) => state.hand.board.player);
  const cannotPairedCardCount = enemyBoardCard.length - playerBoardCard.length;
  const dispatch = useDispatch();
  const [turnCount, setTurnCount] = useState(0);
  const cardCache = useSelector((state) => state.hand.cardCache);

  const onEndTurnButtonClick = async () => {
    dispatch(syncCardBaseLenght());
    if (isClientTurn === true) {
      await delay(1);
      if (playerCardBaseCount <= 0) {
        dispatch(addHealth({ value: -1, player: "player" }));
      }
      dispatch(advanceScenarioMove());
      dispatch(closeYourTurn());
    }
  };
  useEffect(() => {

    if (isClientTurn === false) {
      const timer = setTimeout(async () => {
        dispatch(drawCard({ isEnemy: true }));
        dispatch(syncCardBaseLenght());

        if (enemyCardBaseCount <= 0) {
          dispatch(addHealth({ value: -1, player: "enemy" }));
        }
        dispatch(increment());

        await delay(cardCache.length * 2000);
        dispatch(playCardToBoard({ isEnemy: true }));
        enemyDecide();
        dispatch(syncCardBaseLenght());
        await delay(enemyBoardCard.length * 2000);
        dispatch(advanceScenarioMove());
        dispatch(drawCard({ isEnemy: false }));
        setTurnCount(turnCount + 1);
        dispatch(openYourTurn());
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);

  const enemyDecide = async () => {
    if (playerBoardCard.length < 1) {
      for (let i = 0; i < enemyBoardCard.length + 1; i++) {
        await delay(200);
        dispatch(
          clickBoardCard({
            clickedCard: enemyBoardCard[i],
            actionMaker: "enemy",
          })
        );
        await delay(200);
        dispatch(clickedProfile("player"));
        await delay(200);
      }
    }

    const pairCount = enemyBoardCard.length - cannotPairedCardCount;
    const shuffleSequence = Array.from(Array(pairCount).keys()).sort(
      () => Math.random() - 0.5
    );
    const shuffleSequenceEnemy = Array.from(Array(enemyBoardCard.length).keys()).sort(
      () => Math.random() - 0.5
    );
    for (let i = 0; i <= enemyBoardCard.length; i++) {
      await delay(500);
      dispatch(
        clickBoardCard({
          clickedCard: enemyBoardCard[shuffleSequenceEnemy[i]],
          actionMaker: "enemy",
        })
      );
      await delay(500);
      console.log(i)
      console.log(pairCount)
      if (i < pairCount) {
        dispatch(
          clickBoardCard({
            clickedCard: playerBoardCard[shuffleSequence[i]],
            actionMaker: "enemy",
          })
        );
      } else {
        dispatch(clickedProfile("player"));
      }
      await delay(500);
    }
  };

  return (
    <div className="end-turn">
      <button
        style={{
          backgroundImage: isClientTurn
            ? "url('/menu/turn/end-turn.png')"
            : "url('/menu/turn/enemy-turn.png')",
        }}
        className="end-turn-button m-3"
        onClick={onEndTurnButtonClick}
      ></button>
    </div>
  );
}
