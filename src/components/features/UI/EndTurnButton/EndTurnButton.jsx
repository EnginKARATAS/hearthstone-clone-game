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
  const cardBaseCount = useSelector((state) => state.hand.cardBaseCount.player);
  const dispatch = useDispatch();


  const onEndTurnButtonClick = () => {
    dispatch(syncCardBaseLenght());
    if (isClientTurn === true) {//player turn starts
      setTimeout(() => {
        console.log("player draw card");
        dispatch(drawCard({ isEnemy: false }));
        if (cardBaseCount <= 0) {
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
        dispatch(syncCardBaseLenght());
        dispatch(increment());
        console.log("enemy draw card");
        dispatch(drawCard({ isEnemy: true }));
        setTimeout(() => {
          console.log("enemy auto play hand to board")
          dispatch(playCardToBoard({ isEnemy: true }));
          //dispatch(clickBoardCard({ clickedCard: null, actionMaker: "enemy" }));//enemy clickling many cards, clickling timeout handling in handSlice          
            console.log("enemy auto decides move")
            //dispatch(advanceScenarioMove());
            setTimeout(() => {
              console.log("enemy auto close enemyturn")
              dispatch(openYourTurn());//player turn starts 
            }, GameConstants.enemyCloseTurnTime);
        }, GameConstants.enemyHandToBoardTime);
      }, GameConstants.enemyTurnTime);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);

  return (
    <button
      style={{
        backgroundImage: isClientTurn
          ? "url('/public/menu/turn/end-turn.png')"
          : "url('/public/menu/turn/enemy-turn.png')",
      }}
      className="end-turn-button m-3"
      onClick={onEndTurnButtonClick}
    ></button>
  );
}
