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
import Menu from "./features/Menu/Menu";
import GameConstants from "./GameConstants";
import Settings from "./features/Menu/Settings";
export default function GameBoard() {
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [contactScreen, setContactScreen] = useState(false);
  const clientHealth = useSelector((state) => state.hand.profile.player.cardHealth);
  const enemyHealth = useSelector((state) => state.hand.profile.enemy.cardHealth);
  useEffect(() => {
    const loadCards = async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000 - GameConstants.debugReducedTime);
    };

    loadCards();
  }, []);

  useEffect(() => {
    if (clientHealth <= 0 || enemyHealth <= 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setGameOver(true);
      }, 3000 - GameConstants.debugReducedTime);
      setTimeout(() => {
        setGameOver(false);
        setLoading(false);
        setContactScreen(true);
      }, 7000 - GameConstants.debugReducedTimeLoading); 
    }
  }, [clientHealth, enemyHealth]);

  if (loading) {
    return <LoadingScreen />;
  }
  if (gameOver) {
    return <EndGameScreen />;
  }
  if (contactScreen) {
    return <ContactScreen />;
  }

  return (
    <div className="board ">
      <Menu />
      <FishOrnament />
      <EnemyProfile player="enemy" />
      <YourTurn />
      <EndTurnButton />
      <ClientProfile player="player" />
    </div>
  );
}
