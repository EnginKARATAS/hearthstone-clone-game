import "./Credits.css";

import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice";
export default function Credits() {
  const dispatch = useDispatch();
  return (
    <div className="bg-outer-credits">
      <div
        onClick={() => dispatch(setGameState("menu"))}
        className="credits absolute z-20"
      >
        <h1>Credits</h1>
      </div>
    </div>
  );
}
