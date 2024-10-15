import Profile from "../Profile";
import "./EnemyProfile.css";
import ManaBox from "../../ManaBox/ManaBox";
import Hand from "../../../Card/Hand/Hand";
import Board from "../../../Card/Board/Board";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { increment, openYourTurn } from "../../../counter/counterSlice";
import {
  drawCard,
  playCardToBoard,
  clickBoardCard,
  addHealth,
  syncCardBaseLenght,
} from "../../../hand/handSlice";

export default function EnemyProfile() {
  const enemyBoardCards = useSelector((state) => state.hand.board.enemy);
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isClientTurn === false) {
      const timer = setTimeout(() => {
        dispatch(increment());
        dispatch(syncCardBaseLenght());
        dispatch(drawCard({ isEnemy: true }));
        dispatch(drawCard({ isEnemy: false }));
        setTimeout(() => {
          dispatch(playCardToBoard({ isEnemy: true }));
          dispatch(clickBoardCard({ clickedCard: null, actionMaker: "enemy" }));
          dispatch(openYourTurn());
        }, 2000);
      }, 1);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn, dispatch]);
  return (
    <div className="absolute enemy-profile">
      <Profile
        img={{ pack: "yavuz-pack", photo: "hero-yavuz" }}
        position={{ top: 153, left: 6 }}
        player="enemy"
      />
      <ManaBox position={{ top: 108, left: 218 }} player="enemy" />
      <Hand player="enemy" position={{ top: 12, left: -541 }}></Hand>
      <Board
        player="enemy"
        position={{ top: 300, left: -150 }}
        boardCards={enemyBoardCards}
      />
    </div>
  );
}
