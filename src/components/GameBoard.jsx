import "./GameBoard.css";
import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import FishOrnament from "./features/UI/FishOrnament";
import YourTurn from "./features/UI/YourTurn/YourTurn";
import ClientProfile from "./features/UI/Profile/ClientProfile/ClientProfile";
import EnemyProfile from "./features/UI/Profile/EnemyProfile/EnemyProfile";
import { useEffect, useState } from "react";
import LoadingScreen from "./features/UI/GameManagement/LoadingScreen";
import { useSelector } from "react-redux";
import EndGameScreen from "./features/UI/GameManagement/EndGameScreen";
import ContactScreen from "./features/UI/GameManagement/ContactScreen";
 import GameConstants from "./GameConstants";
 import { setGameState } from "./features/game/gameSlice.ts";
import { useDispatch } from "react-redux";

export default function GameBoard() {
  const dispatch = useDispatch();
  const clientHealth = useSelector((state) => state.hand.profile.player.cardHealth);
  const enemyHealth = useSelector((state) => state.hand.profile.enemy.cardHealth);
  const gameState = useSelector((state) => state.game.gameState);

  useEffect(() => {
    if (clientHealth <= 0 || enemyHealth <= 0) {
      setGameState("loading")
      setTimeout(() => {
        setGameState("gameOver");
      }, 3000 - GameConstants.debugReducedTime);
      setTimeout(() => {
        setGameState("contactScreen");
      }, 7000 - GameConstants.debugReducedTimeLoading); 
    }
  }, [clientHealth, enemyHealth]);

  if (gameState === "loading") {
    return <LoadingScreen />;
  }
  if (gameState === "gameOver") {
    return <EndGameScreen />;
  }
  if (gameState === "contactScreen") {
    return <ContactScreen />;
  }

  return (

      <div className="">
        <EnemyProfile player="enemy" />
        <YourTurn />
        <EndTurnButton />
        <ClientProfile player="player" />
        <img onClick={() => dispatch(setGameState("pause"))} className="settings-icon absolute" width="50" src="/menu/menu/settings/settings-icon.png" alt="settings" />
      </div>
  );
}
