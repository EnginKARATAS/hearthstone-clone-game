import "./YourTurn.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GameConstants from "../../../GameConstants";
import { drawCard, syncCardBaseLenght } from "../../hand/handSlice";
export default function YourTurn() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const gameState = useSelector((state) => state.game.gameState);
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    if (isClientTurn === true && gameState === "playing") {
      (async () => {
        dispatch(drawCard({ isEnemy: false }));
        dispatch(syncCardBaseLenght());
        setOpenPopup(true);
        await delay(GameConstants.endTurnDisplayTime);
        setOpenPopup(false);
      })();
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
