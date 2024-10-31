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
import GameConstants from "../../../GameConstants";
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
  const dispatch = useDispatch();
  const [turnCount, setTurnCount] = useState(0);

  const onEndTurnButtonClick = async () => {
    dispatch(syncCardBaseLenght());
    if (isClientTurn === true) {
      await delay(1);
      if (playerCardBaseCount <= 0) {
        dispatch(addHealth({ value: -1, player: "player" }));
      }
      console.log("Player decides move");
      dispatch(advanceScenarioMove());
      dispatch(closeYourTurn());
    }
  };
  useEffect(() => {
    console.log(turnCount);
    dispatch(syncCardBaseLenght());

    if (isClientTurn === false) {
      const timer = setTimeout(async () => {
        console.log("enemy draw card");
        dispatch(drawCard({ isEnemy: true }));

        if (enemyCardBaseCount <= 0) {
          dispatch(addHealth({ value: -1, player: "enemy" }));
        }
        dispatch(increment());

        await delay(2222);
        console.log("enemy auto play hand to board");
        dispatch(playCardToBoard({ isEnemy: true }));
        console.log("enemy auto decides move");
        turnCount >= 1 && enemyDecide();
        await delay(2222);
        dispatch(advanceScenarioMove());
        console.log("enemy auto close enemy turn");
        console.log("player draw card");
        dispatch(drawCard({ isEnemy: false }));
        setTurnCount(turnCount + 1);

        dispatch(openYourTurn());
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);

  const enemyDecide = () => {
    const cannotPairedCardCount =
      enemyBoardCard.length - playerBoardCard.length;

    for (let i = 0; i < playerBoardCard.length - cannotPairedCardCount; i++) {
      setTimeout(() => {
        dispatch(
          clickBoardCard({
            clickedCard: enemyBoardCard[Math.floor(Math.random() * enemyBoardCard.length-1)],
            actionMaker: "enemy",
          })
        );
        if (playerBoardCard.length > 0) {
          setTimeout(() => {
            enemyBoardCard.length - playerBoardCard.length;

            if (i % 5 === 0) {
              dispatch(clickedProfile("player"));
            } else {
              clickBoardCard({
                clickedCard: playerBoardCard[Math.floor(Math.random() * playerBoardCard.length-1)],
                actionMaker: "enemy",
              });
            }
          }, 1000);
        }
      }, 1000);
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
