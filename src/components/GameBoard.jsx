import "./GameBoard.css";
import EndTurnButton from "./features/UI/EndTurnButton/EndTurnButton";
import YourTurn from "./features/UI/YourTurn/YourTurn";
import ClientProfile from "./features/UI/Profile/ClientProfile/ClientProfile";
import EnemyProfile from "./features/UI/Profile/EnemyProfile/EnemyProfile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameConstants from "./GameConstants";
import { setGameState } from "./features/game/gameSlice.ts";
import { useDispatch } from "react-redux";

export default function GameBoard() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const dispatch = useDispatch();
  const clientHealth = useSelector(
    (state) => state.hand.profile.player.cardHealth
  );
  const enemyHealth = useSelector(
    (state) => state.hand.profile.enemy.cardHealth
  );

  useEffect(() => {
    (async () => {
      if (clientHealth <= 0 || enemyHealth <= 0) {
        dispatch(setGameState("loading"));
        await delay(GameConstants.endGameScreenDelay1);
        dispatch(setGameState("gameOver"));
        await delay(GameConstants.endGameScreenDelay2);
        dispatch(setGameState("contactScreen"));
      }
    })();
  }, [clientHealth, enemyHealth]);

  return (
    <div className="">
      <EnemyProfile player="enemy" />
      <YourTurn />
      <EndTurnButton />
      <ClientProfile player="player" />
      <img
        onClick={() => dispatch(setGameState("pause"))}
        className="settings-icon absolute"
        width="50"
        src="/menu/menu/settings/settings-icon.png"
        alt="settings"
      />
    </div>
  );
}
