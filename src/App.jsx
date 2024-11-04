import GameBoard from "./components/GameBoard";
import "./App.css";
import "./styles/fonts.css";
import RotateScreen from "./components/features/Menu/RotateScreen/RotateScreen";
import { useEffect } from "react";
import { setCardBase, setProfile } from "./components/features/hand/handSlice";
import { useDispatch } from "react-redux";
import Menu from "./components/features/Menu/Menu/Menu";
import FishOrnament from "./components/features/UI/FishOrnament";
function App() {
  const dispatch = useDispatch();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  useEffect(() => {}, [windowHeight, windowWidth]);
  if (windowWidth <= windowHeight) return <RotateScreen />;

  return (
    <>
      <div className="bg absolute board">
        <Menu />
        <FishOrnament />
      </div>
    </>
  );
}

export default App;
