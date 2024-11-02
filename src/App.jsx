import GameBoard from "./components/GameBoard";
import "./App.css";
import "./styles/fonts.css";
import RotateScreen from "./components/features/Menu/RotateScreen";
import { useEffect } from "react";
function App() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  useEffect(() => {
    console.log(windowHeight);
    console.log(windowWidth);
  }, [windowHeight, windowWidth]);

  if (windowWidth <= windowHeight) return <RotateScreen />;

  return (
    <>
      <div className="bg">
        <GameBoard className="board" />
      </div>
    </>
  );
}

export default App;
