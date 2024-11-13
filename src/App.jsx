import "./App.css";
import "./styles/fonts.css";
import RotateScreen from "./components/features/Menu/RotateScreen/RotateScreen";
import { useEffect, useState } from "react";
import Menu from "./components/features/Menu/Menu/Menu";
import FishOrnament from "./components/features/UI/FishOrnament";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
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

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowDimensions.width <= windowDimensions.height)
    return <RotateScreen />;

  return (
    <div className="screen-container">
      <div className="bg-container">
        <div className="menu absolute">
          <p className="bg-yellow-300 absolute top-0 right-0 w-[300px] opacity-40">{t("test")}</p>
          <Menu />
          <FishOrnament />
        </div>
      </div>
    </div>
  );
}

export default App;
