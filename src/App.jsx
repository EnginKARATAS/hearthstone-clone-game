import GameBoard from "./components/GameBoard";
import "./App.css";
import "./styles/fonts.css";
import RotateScreen from "./components/features/Menu/RotateScreen/RotateScreen";
import { useEffect, useState } from "react";
import { setCardBase, setProfile } from "./components/features/hand/handSlice";
import { useDispatch } from "react-redux";
import Menu from "./components/features/Menu/Menu/Menu";
import FishOrnament from "./components/features/UI/FishOrnament";

function App() {
  const dispatch = useDispatch();
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowDimensions.width <= windowDimensions.height) return <RotateScreen />;

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
