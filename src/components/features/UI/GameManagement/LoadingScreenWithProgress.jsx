import { useSelector } from "react-redux";
import "../../../features/UI/GameManagement/LoadingScreen.css";  

export default function LoadingScreenWithProgress() {
  const loadingProgress = useSelector((state) => state.game.loadingProgress);

  return (
    <div className="loading-screen fixed flex justify-center items-center flex-col">
      <img src="/menu/loading/hearthstone.png" alt="heartstone" />
      <h1 className="loading text-5xl font-bold">Loading... {Math.round(loadingProgress)}%</h1>
      
       <div className="w-[400px] h-[30px] bg-gray-700 rounded-full mt-4 overflow-hidden">
        <div 
          className="h-full bg-yellow-500 transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        >
        </div>
      </div>

      <h1 className="loading text-2xl font-bold mt-10">clone app made by love</h1>
      <p className="loading text-sm mt-20 w-[800px] text-center"> 
        This game is a fan-made project inspired by the popular card game Hearthstone, 
        developed by Blizzard Entertainment. It is not affiliated with, endorsed by, 
        or sponsored by Blizzard Entertainment  
      </p>
    </div>
  );
}
