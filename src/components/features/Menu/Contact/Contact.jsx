import "./Contact.css";

import { useDispatch } from "react-redux";
import { setGameState } from "../../game/gameSlice";
export default function Contact() {
  const dispatch = useDispatch();
  return (
    <div className="bg-outer-contact">
      <div
        onClick={() => dispatch(setGameState("menu"))}
        className="contact absolute z-20"
      >
        <h1>Contact</h1>
      </div>
    </div>
  );
}
