import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "../../game/gameSlice.ts";
import Settings from "../Settings/Settings.jsx";
import Contact from "../Contact/Contact.jsx";
import CharacterSelectionScreen from "../CharacterSelectionScreen/CharacterSelectionScreen.jsx";
import { useTranslation } from "react-i18next"; 
import Pause from "../Pause/Pause.jsx";
export default function Menu() {
  const { t } = useTranslation();
  const gameState = useSelector((state) => state.game.gameState);
  const dispatch = useDispatch();
  const dispatchGameState = (state) => {
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
  } else if (gameState === "characterSelection") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <CharacterSelectionScreen dispatchGameState={dispatchGameState} />
        </div>
      </div>
    );
  } else if (gameState === "contact") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <h1>Contact</h1>
          <Contact onClick={dispatchGameState("contact")} />
        </div>
      </div>
    );
  } else if (gameState === "pause") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <h1>Pause</h1>
          <Pause />
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
            {t("start")}
          </p>
          <p
            className="px-4 py-2 text-white menu-item"
            onClick={() => dispatchGameState("settings")}
          >
            {t("settings")}
          </p>
          <p
            className="px-4 py-2 text-white menu-item"
            onClick={() => dispatchGameState("contact")}
          >
            {t("contact")}
          </p>
          <p
            onClick={() => dispatchGameState("credits")}
            className="px-4 py-2 text-white menu-item"
          >
            {t("credits")}
          </p>
        </div>
      </div>
    )
  );
}
