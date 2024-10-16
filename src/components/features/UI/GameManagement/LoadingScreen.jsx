import "../../../features/UI/GameManagement/LoadingScreen.css";  

export default function LoadingScreen() {
  return (
    <div className="loading-screen fixed flex justify-center items-center flex-col">
      <img src="/public/menu/loading/hearthstone.png" alt="heartstone" />
      <h1 className="loading text-5xl font-bold">Loading...</h1>
      <h1 className="loading text-2xl font-bold mt-10">clone app made by love</h1>
      <p className="loading text-sm mt-20 w-[800px] text-center"> 
      This game is a fan-made project inspired by the popular card game Hearthstone, developed by Blizzard Entertainment. It is not affiliated with, endorsed by, or sponsored by Blizzard Entertainment or any of its subsidiaries.
      All trademarks, copyrights, and other intellectual property rights related to Hearthstone are the property of Blizzard Entertainment. This project is intended for educational and entertainment purposes only.
      </p>
    </div>
  );
};
