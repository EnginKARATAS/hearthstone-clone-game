import "./CharacterSelectionScreen.css";
import CharactersInComponent from "./CharactersInComponent/CharactersInComponent";
import { characterPack } from "../../../../assets/characterPack";
import MiniCharacterCards from "./MiniCharacterCards/MiniCharacterCards";
export default function CharacterSelectionScreen({dispatchGameState}) {
  return (
    <div onClick={() => dispatchGameState("playing")} className="select-enemy-screen fixed flex justify-center items-center flex-col">
      <div className="middle-image absolute">
        <img src="/menu/loading/hearthstone.png" alt="heartstone" />
      </div>
      <h1 className="select-enemy text-5xl font-bold absolute p1-character">
        Left Character Display
      </h1>
      <span className="select-enemy text-5xl font-bold absolute p2-character">
        Right Character Display
      </span>
      <span className="select-enemy text-2xl font-bold mt-10 absolute p-select flex flex-row">
        {Object.keys(characterPack).map((characterPack) => (
          <CharactersInComponent key={characterPack} characterPack={characterPack} />
        ))}
      </span>
      <p className="select-enemy text-sm mt-80 w-[800px] text-center absolute p-cards">
        <MiniCharacterCards characterPack={characterPack} />
      </p>
    </div>
  );
}
