import "./YourTurn.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GameConstants from "../../../GameConstants";
import { drawCard, syncCardBaseLenght } from "../../hand/handSlice";
export default function YourTurn() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const gameState = useSelector((state) => state.game.gameState);
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    if (isClientTurn === true && gameState === "playing") {
      dispatch(drawCard({ isEnemy: false }));
      dispatch(syncCardBaseLenght());
      setOpenPopup(true);
      const timer = setTimeout(() => {
        setOpenPopup(false);
      }, GameConstants.yourTurnPopupWaitTime);

      return () => clearTimeout(timer);
    }
  }, [isClientTurn]);

  return (
    <div>
      {openPopup && (
        <img className="your-turn" src="/menu/turn/your-turn.png" alt="" />
      )}
    </div>
  );
}
