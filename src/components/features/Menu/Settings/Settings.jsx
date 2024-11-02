import "./Settings.css";

import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice";
export default function Settings() {
  const dispatch = useDispatch();
  return (
    <div className="bg-outer-settings" onClick={() => dispatch(setGameState("menu"))}>
      <div className="settings absolute z-20">
        <h1>Settings</h1>
      </div>
    </div>
  );
}
