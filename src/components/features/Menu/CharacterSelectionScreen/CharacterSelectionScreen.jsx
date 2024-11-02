import "./CharacterSelectionScreen.css";  

export default function CharacterSelectionScreen() {
  return (
    <div className="select-enemy-screen fixed flex justify-center items-center flex-col">
      <div className="middle-image absolute"><img src="/menu/loading/hearthstone.png" alt="heartstone" /></div>
      <h1 className="select-enemy text-5xl font-bold absolute p1-character">Left Character Display</h1>
      <span className="select-enemy text-5xl font-bold absolute p2-character">Right Character Display</span>
      <span className="select-enemy text-2xl font-bold mt-10 absolute p-select">Characters</span>
      <p className="select-enemy text-sm mt-80 w-[800px] text-center absolute p-cards"> 
      This game is a fan-made project inspired by the popular card game Hearthstone, developed by Blizzard Entertainment. It is not affiliated with, endorsed by, or sponsored by Blizzard Entertainment  
      </p>
    </div>
  );
};
