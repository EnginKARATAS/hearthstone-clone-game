import "./EndTurnButton.css";
import { useDispatch } from "react-redux";
import { closeYourTurn } from "../../counter/counterSlice";
import { useSelector } from "react-redux";
import { addHealth, syncCardBaseLenght, advanceScenarioMove, drawCard, playCardToBoard, clickBoardCard } from "../../hand/handSlice"; 
import { useEffect } from "react";
import { increment, openYourTurn } from "../../counter/counterSlice";
import GameConstants from "../../../GameConstants";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function EndTurnButton() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const playerCardBaseCount = useSelector((state) => state.hand.cardBaseCount.player);
  const enemyCardBaseCount = useSelector((state) => state.hand.cardBaseCount.enemy);
  const dispatch = useDispatch();


  const onEndTurnButtonClick = async () => {
    dispatch(syncCardBaseLenght());
    if (isClientTurn === true) {
      await delay(1); 
      if (playerCardBaseCount <= 0) {
        dispatch(addHealth({ value: -1, player: "player" }));
      }
      console.log("Player decides move")
      dispatch(advanceScenarioMove());
      dispatch(closeYourTurn());
    }
  };

  useEffect(() => {
    if (isClientTurn === false) {
      const timer = setTimeout(async () => {
        console.log("enemy draw card");
        dispatch(drawCard({ isEnemy: true }));

        if (enemyCardBaseCount <= 0) {
          dispatch(addHealth({ value: -1, player: "enemy" }));
        }
        dispatch(syncCardBaseLenght());
        dispatch(increment());

        await delay(1000 - GameConstants.debugReducedTimeShort); 
        console.log("enemy auto play hand to board")
        dispatch(playCardToBoard({ isEnemy: true }));
        console.log("enemy auto decides move")
        dispatch(advanceScenarioMove());
        await delay(1000 - GameConstants.debugReducedTimeShort); 
        console.log("enemy auto close enemy turn")
        console.log("player draw card");
        dispatch(drawCard({ isEnemy: false }));
        dispatch(openYourTurn());
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);

  return (
    <button
      style={{
        backgroundImage: isClientTurn
          ? "url('/menu/turn/end-turn.png')"
          : "url('/menu/turn/enemy-turn.png')",
      }}
      className="end-turn-button m-3"
      onClick={onEndTurnButtonClick}
    ></button>
  );
}
