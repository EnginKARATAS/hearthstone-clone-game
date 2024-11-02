import "./CharacterSelectionScreen.css";
import CharactersInComponent from "./CharactersInComponent/CharactersInComponent";
import { characterPack } from "../../../../assets/characterPack";
import MiniCharacterCards from "./MiniCharacterCards/MiniCharacterCards";
import { useState } from "react";
export default function CharacterSelectionScreen({ dispatchGameState }) {
  const [selectedCharacterPack, setSelectedCharacterPack] =
    useState("engin-pack");

  const handleCharacterPackChange = (characterPack) => {
    setSelectedCharacterPack(characterPack);
  };
  return (
    <div
      //onClick={() => dispatchGameState("characterSelection")}
      className="select-enemy-screen fixed flex justify-center items-center flex-col"
    >
      <div className="middle-image absolute">
        <img src="/menu/loading/hearthstone.png" alt="heartstone" />
      </div>
      <div className="p1-character-container text-5xl font-bold  absolute">
        <img
          className="absolute green-pennant"
          src="/menu/menu/selection/green-pennant.png"
          alt="green-pennant"
        />
        <img
          className="relative p1-character"
          src={`/cards/card-images/${"engin-pack"}/${"engin-pack"}.png`}
          alt="left-character"
        />
      </div>

      <div className="p2-character-container text-5xl font-bold  absolute">
        <img
          className="absolute red-pennant"
          src="/menu/menu/selection/red-pennant.png"
          alt="red-pennant"
        />
        <img
          className="relative p2-character"
          src={`/cards/card-images/${selectedCharacterPack}/${selectedCharacterPack}.png`}
          alt="right-character"
        />
      </div>
     
      <span className="select-enemy text-2xl font-bold mt-10 absolute p-select flex flex-row">
        {Object.keys(characterPack).map((characterPack) => (
          <CharactersInComponent
            key={characterPack}
            characterPack={characterPack}
            handleCharacterPackChange={handleCharacterPackChange}
          />
        ))}
      </span>
      <p className="select-enemy text-sm mt-80 w-[800px] text-center absolute p-cards">
        <MiniCharacterCards selectedCharacterPack={selectedCharacterPack} />
      </p>
    </div>
  );
}
