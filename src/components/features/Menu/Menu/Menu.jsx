import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "../../game/gameSlice.ts";
import "./Menu.css";
import Settings from "../Settings/Settings.jsx";
import { useState } from "react";
import Contact from "../Contact/Contact.jsx";
import CharacterSelectionScreen from "../CharacterSelectionScreen/CharacterSelectionScreen.jsx";
export default function Menu() {
  const gameState = useSelector((state) => state.game.gameState);
  const dispatch = useDispatch();
  const [openMenuOption, setOpenMenuOption] = useState("menu");
  const dispatchGameState = (state) => {
    console.log(state);
    dispatch(setGameState(state));
  };
  
  if (gameState === "settings") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <h1>Settings</h1>
          <Settings />
        </div>
      </div>
    );
  }
  else if (gameState === "characterSelection") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <CharacterSelectionScreen />
        </div>
      </div>
    );
  }
  else if (gameState === "contact") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <h1>Contact</h1>
          <Contact onClick={dispatchGameState("contact")} />
        </div>
      </div>
    );
  }
  return (
     gameState === "menu" && (
      <div className="bg-outer absolute z-20">
        <div className="menu flex items-center justify-center text-center flex flex-col space-y-4 gap-3">
          <p
            onClick={() => dispatchGameState("characterSelection")}
            className="px-4 py-2 text-white menu-item"
          >
            Start Game
          </p>
          <p
            className="px-4 py-2 text-white menu-item"
            onClick={() => dispatchGameState("settings")}
          >
            Settings
          </p>
          <p
            className="px-4 py-2 text-white menu-item"
            onClick={() => dispatchGameState("contact")}
          >
            Contact
          </p>
          <p
            onClick={() => dispatchGameState("credits")}
            className="px-4 py-2 text-white menu-item"
          >
            Credits
          </p>
        </div>
      </div>
    )
  );
}
