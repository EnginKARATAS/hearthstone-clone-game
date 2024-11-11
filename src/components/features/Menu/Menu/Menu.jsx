import { useEffect } from 'react';
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { setGameState, setResourcesLoaded, setLoadingProgress } from "../../game/gameSlice";
import Settings from "../Settings/Settings.jsx";
import Contact from "../Contact/Contact.jsx";
import CharacterSelectionScreen from "../CharacterSelectionScreen/CharacterSelectionScreen.jsx";
import { useTranslation } from "react-i18next";
import Pause from "../Pause/Pause.jsx";
import GameBoard from "../../../GameBoard.jsx";
import LoadingScreen from "../../UI/GameManagement/LoadingScreen.jsx";
import EndGameScreen from "../../UI/GameManagement/EndGameScreen.jsx";
import ContactScreen from "../../UI/GameManagement/ContactScreen.jsx";
import Credits from "../Credits/Credits.jsx";

export default function Menu() {
  const { t } = useTranslation();
  const gameState = useSelector((state) => state.game.gameState);
  const resourcesLoaded = useSelector((state) => state.game.resourcesLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const preloadResources = async () => {
      try {
        const imagesToPreload = [
          '/armor-bar.png',
          '/health-bar.png',
          '/menu/menu/bg-outer.png',
          '/menu/menu/contact.png',
          '/menu/menu/credits.png',
          '/menu/menu/menu.png',
          '/menu/menu/settings.png',
          '/menu/loading/hearthstone.png',
          '/bg-dark.png',
          '/hearthstone-board-2.png',
          '/menu/menu/selection/green-pennant.png',
          '/menu/menu/selection/red-pennant.png',
          '/menu/menu/selection/mini-bg.png',
          '/menu/menu/settings/en.png',
          '/menu/menu/settings/tr.png',
        ];

        let loadedImages = 0;
        const totalImages = imagesToPreload.length;

        const imagePromises = imagesToPreload.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              loadedImages++;
              const progress = (loadedImages / totalImages) * 100;
              dispatch(setLoadingProgress(progress));
              resolve();
            };
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        dispatch(setResourcesLoaded(true));
      } catch (error) {
        console.error('Failed to load resources:', error);
        dispatch(setResourcesLoaded(true));
      }
    };

    if (!resourcesLoaded) {
      preloadResources();
    }
  }, [dispatch, resourcesLoaded]);

  const dispatchGameState = (state) => {
    dispatch(setGameState(state));
  };

  if (!resourcesLoaded) {
    return <LoadingScreen />;
  }

  if (gameState === "gameOver") {
    return <EndGameScreen />;
  } else if (gameState === "contactScreen") {
    return <ContactScreen />;
  } else if (gameState === "settings") {
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
  } else if (gameState === "credits") {
    return (
      <div>
        <div className="bg-outer absolute z-20 bg">
          <Credits onClick={dispatchGameState("credits")} />
        </div>
      </div>
    );
  } else if (gameState === "playing" || gameState === "pause") {
    return (
      <div>
        <GameBoard className="board" />
        <div className="bg-outer absolute z-20 bg">
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
            className="px-4 py-2 text-white menu-item pt-3"
          >
            {t("credits")}
          </p>
        </div>
      </div>
    )
  );
}
