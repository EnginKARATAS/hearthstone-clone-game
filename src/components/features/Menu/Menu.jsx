import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "../game/gameSlice.ts";
import "./Menu.css";
import Settings from "./Settings.jsx";
import { useState } from "react";
import Contact from "./Contact.jsx";
export default function Menu() {
  const gameState = useSelector((state) => state.game.gameState);
  const dispatch = useDispatch();
  const [openMenuOption, setOpenMenuOption] = useState("menu");
  if (openMenuOption === "settings") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <h1>Settings</h1>
          <Settings setOpenMenuOption={setOpenMenuOption} />
        </div>
      </div>
    );
  }
  else if (openMenuOption === "contact") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <h1>Contact</h1>
          <Contact setOpenMenuOption={setOpenMenuOption} />
        </div>
      </div>
    );
  }
  return (
    openMenuOption === "menu" && gameState === "menu" && (
      <div className="bg-outer absolute z-20">
        <div className="menu flex items-center justify-center text-center flex flex-col space-y-4 gap-3">
          <p
            onClick={() => dispatch(setGameState("playing"))}
            className="px-4 py-2 text-white menu-item"
          >
            Start Game
          </p>
          <p
            className="px-4 py-2 text-white menu-item"
            onClick={() => setOpenMenuOption("settings")}
          >
            Settings
          </p>
          <p
            className="px-4 py-2 text-white menu-item"
            onClick={() => setOpenMenuOption("contact")}
          >
            Contact
          </p>
          <p
            onClick={() => setOpenMenuOption("contact")}
            className="px-4 py-2 text-white menu-item"
          >
            Credits
          </p>
        </div>
      </div>
    )
  );
}
