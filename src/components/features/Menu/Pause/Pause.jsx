import "./Pause.css";
import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice.ts";
import { resetGame } from "../../game/gameSlice.ts";
import { useSelector } from "react-redux";
export default function Pause() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game.gameState);
  const goMainMenu = () => {
    dispatch(resetGame());
    dispatch(setGameState("menu"));
  }
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
          onClick={() => dispatch(resetGame())}
        >
          Concade
        </button>
        <button
          className="pause-button p-2 rounded-md w-[150px]"
          onClick={goMainMenu}
        >
          Main Menu
        </button>
      </div>
      <div
        className="pause-container"
        onClick={() => dispatch(setGameState("playing"))}
      ></div>
    </div>
  );
}
