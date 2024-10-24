import "./YourTurn.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameConstants from "../../../GameConstants";

export default function YourTurn() {
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const gameState = useSelector((state) => state.game.gameState);
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    if (isClientTurn === true && gameState === "playing") {
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
