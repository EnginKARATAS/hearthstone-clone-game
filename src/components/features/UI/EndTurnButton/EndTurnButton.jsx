import "./EndTurnButton.css";
import { useDispatch } from "react-redux";
import { closeYourTurn, resetInGameMana } from "../../counter/counterSlice";
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
  const enemyHandCard = useSelector((state) => state.hand.hand.enemy);

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
        dispatch(increment({ player: "enemy" }));
        dispatch(resetInGameMana({ player: "enemy" }));
        dispatch(syncCardBaseLenght());
        dispatch(drawCard({ isEnemy: true }));

        if (enemyCardBaseCount <= 0) {
          dispatch(addHealth({ value: -1, player: "enemy" }));
        }

        await delay(cardCache.length * 2000).then(async () => {
          if (enemyHandCard.length > 2)
            dispatch(playCardToBoard({ isEnemy: true }));
          enemyDecide();
          dispatch(syncCardBaseLenght());
          await delay(enemyBoardCard.length * 2000);
          dispatch(advanceScenarioMove());
          setTurnCount(turnCount + 1);
          dispatch(openYourTurn());
          dispatch(increment({ player: "player" }));
          dispatch(resetInGameMana({ player: "player" }));
          dispatch(drawCard({ isEnemy: false }));
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);
  const shuffleSequenceNoEnemy = Array.from(
    Array(enemyBoardCard.length).keys()
  ).sort(() => Math.random() - 0.5);
  const enemyDecide = async () => {
    if (playerBoardCard.length < 1) {
      for (let i = 0; i < enemyBoardCard.length + 1; i++) {
        await delay(200);
        dispatch(
          clickBoardCard({
            clickedCard: enemyBoardCard[shuffleSequenceNoEnemy[i]],
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
    const shuffleSequenceEnemy = Array.from(
      Array(enemyBoardCard.length).keys()
    ).sort(() => Math.random() - 0.5);
    for (let i = 0; i <= enemyBoardCard.length; i++) {
      await delay(500);
      dispatch(
        clickBoardCard({
          clickedCard: enemyBoardCard[shuffleSequenceEnemy[i]],
          actionMaker: "enemy",
        })
      );
      await delay(500);
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
  const chooseHero = () => {};
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
