import GameBoard from "./components/GameBoard";
import "./App.css";
import "./styles/fonts.css";
import RotateScreen from "./components/features/Menu/RotateScreen/RotateScreen";
import { useEffect } from "react";
import { setCardBase, setProfile } from "./components/features/hand/handSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  useEffect(() => {
  }, [windowHeight, windowWidth]);
  dispatch(setCardBase({characters: { p1Name: "yavuz-pack", p2Name: "engin-pack" }}));
  dispatch(setProfile({p1Name: "yavuz-pack", p2Name: "engin-pack"}))
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
