import "./Pause.css";
import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice.ts";
import { resetGame } from "../../game/gameSlice.ts";
export default function Pause() {
  const dispatch = useDispatch();
  return (
    <div className="pause-container absolute">
      <div
        className="pause-container"
        onClick={() => dispatch(setGameState("playing"))}
      ></div>
      <div className="pause flex flex-col items-center justify-center absolute gap-3">
        <button
          className="pause-button p-2 rounded-md"
          onClick={() => dispatch(setGameState("playing"))}
        >
          Resume
        </button>
        <button
          className="pause-button p-2 rounded-md"
          onClick={() => dispatch(resetGame())}
        >
          Concade
        </button>
        <button
          className="pause-button p-2 rounded-md"
          onClick={() => dispatch(setGameState("menu"))}
        >
          Main Menu
        </button>
      </div>
    </div>
  );
}
