import "./Pause.css";
import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice.ts";
import { resetGame } from "../../game/gameSlice.ts";
import { useSelector } from "react-redux";
import { useState } from "react";
import YouSure from "./YouSure";

export default function Pause() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game.gameState);
  const [showConfirm, setShowConfirm] = useState(null);

  const goMainMenu = () => {
    dispatch(resetGame());
    dispatch(setGameState("menu"));
  };

  const handleConcede = () => {
    dispatch(resetGame());
  };

  if (gameState === "pause") return (
    <div className="absolute">
      <div className="pause flex flex-col items-center justify-center absolute gap-4">
        <button
          className="pause-button p-2 rounded-md w-[150px]"
          onClick={() => dispatch(setGameState("playing"))}
        >
          Resume
        </button>
        <button
          className="pause-button p-2 rounded-md w-[150px]"
          onClick={() => setShowConfirm("concede")}
        >
          Concede
        </button>
        <button
          className="pause-button p-2 rounded-md w-[150px]"
          onClick={() => setShowConfirm("menu")}
        >
          Main Menu
        </button>
      </div>
      <div
        className="pause-container"
        onClick={() => dispatch(setGameState("playing"))}
      ></div>
      
      {showConfirm === "menu" && (
        <YouSure
          message="Are you sure you want to return to the main menu?"
          onConfirm={goMainMenu}
          onCancel={() => setShowConfirm(null)}
        />
      )}
      {showConfirm === "concede" && (
        <YouSure
          message="Are you sure you want to concede the game?"
          onConfirm={handleConcede}
          onCancel={() => setShowConfirm(null)}
        />
      )}
    </div>
  );
}
