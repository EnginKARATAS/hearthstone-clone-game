import "./EndTurnButton.css";
import { useDispatch } from "react-redux";
import { closeYourTurn } from "../../counter/counterSlice";
import { useSelector } from "react-redux";
import { addHealth, syncCardBaseLenght, advanceScenarioMove, drawCard, playCardToBoard } from "../../hand/handSlice"; 
import { useEffect } from "react";
import { increment, openYourTurn } from "../../counter/counterSlice";
import GameConstants from "../../../GameConstants";

export default function EndTurnButton() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const playerCardBaseCount = useSelector((state) => state.hand.cardBaseCount.player);
  const enemyCardBaseCount = useSelector((state) => state.hand.cardBaseCount.enemy);
  const dispatch = useDispatch();


  const onEndTurnButtonClick = () => {
    dispatch(syncCardBaseLenght());
    if (isClientTurn === true) {//player turn starts
      setTimeout(() => {
        if (playerCardBaseCount <= 0) {
          dispatch(addHealth({ value: -1, player: "player" }));
        }
        console.log("Player decides move")
        dispatch(advanceScenarioMove());
      }, 1);
      dispatch(closeYourTurn());//player turn ends
    }
  };

  useEffect(() => {
    if (isClientTurn === false) {//enemy turn starts
      const timer = setTimeout(() => {
        console.log("enemy draw card");
        dispatch(drawCard({ isEnemy: true }));

        if (enemyCardBaseCount <= 0) {
          dispatch(addHealth({ value: -1, player: "enemy" }));
        }
        dispatch(syncCardBaseLenght());
        dispatch(increment());

        setTimeout(() => {//enemy interaction
          console.log("enemy auto play hand to board")
          dispatch(playCardToBoard({ isEnemy: true }));
          //dispatch(clickBoardCard({ clickedCard: null, actionMaker: "enemy" }));//enemy clickling many cards, clickling timeout handling in handSlice          
            console.log("enemy auto decides move")
            //dispatch(advanceScenarioMove());
            setTimeout(() => {
              console.log("enemy auto close enemyturn")
              console.log("player draw card");
              dispatch(drawCard({ isEnemy: false }));
              dispatch(openYourTurn());//player turn starts 
            }, 1000 - GameConstants.debugReducedTimeShort);
        }, 1000 - GameConstants.debugReducedTimeShort);
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
