import GameBoard from "./components/GameBoard";
import "./App.css";
import "./styles/fonts.css";
import RotateScreen from "./components/features/Menu/RotateScreen/RotateScreen";
import { useEffect } from "react";
import { setCardBase } from "./components/features/hand/handSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  useEffect(() => {
  }, [windowHeight, windowWidth]);
  dispatch(setCardBase({characters: { p1Name: "engin-pack", p2Name: "yavuz-pack" }}));
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
