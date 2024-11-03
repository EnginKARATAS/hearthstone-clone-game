import "./CharacterSelectionScreen.css";
import CharactersInComponent from "./CharactersInComponent/CharactersInComponent";
import { characterPack } from "../../../../assets/characterPack";
import MiniCharacterCards from "./MiniCharacterCards/MiniCharacterCards";
import { useState } from "react";
export default function CharacterSelectionScreen({ dispatchGameState }) {
  const [lastSelectedCharacterPack, setLastSelectedCharacterPack] =
    useState("");
  const [characters, setCharacters] = useState([null, null]);
  const handleCharacterPackChange = (characterPack) => {
    if (characters[0] === null && characters[1] === null) {
      setCharacters([characterPack, null]);
    } else {
      if (characterPack === characters[0] && characters[1] === null) {
        setCharacters([null, null]);
      } else if (characters[1]) {
        if (characterPack === characters[1]) {
          setCharacters([null, null]);
        } else {
          setCharacters([characters[0], null]);
        }
      } else {
        setCharacters([characters[0], characterPack]);
      }
    }
  };
  const handleCharacterPackHover = (characterPack) => {
    setLastSelectedCharacterPack(characterPack);
  };
  const handleCharacterPackLeave = () => {
    setLastSelectedCharacterPack("");
  };
  return (
    <div
      //onClick={() => dispatchGameState("playing")}
      className="character-selection-screen absolute z-25"
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
        {characters[0] && (
          <>
            <img
              className="relative p1-character"
              src={`/cards/card-images/${characters[0]}/${characters[0]}.png`}
              alt="left-character"
            />
          </>
        )}
        <div className="flex justify-center items-center player-name-container absolute">
          <h1 className="p1-character-name">Player 1</h1>
        </div>
      </div>

      <div className="p2-character-container text-5xl font-bold absolute">
        <img
          className="absolute red-pennant"
          src="/menu/menu/selection/red-pennant.png"
          alt="red-pennant"
        />
        {characters[1] && (
          <>
            <img
              className="relative p2-character"
              src={`/cards/card-images/${characters[1]}/${characters[1]}.png`}
              alt="right-character"
            />
          </>
        )}
        <div className="flex justify-center items-center player-name-container absolute">
          <h1 className="p2-character-name">Player 2</h1>
        </div>
      </div>

      <div className="screen-center-container flex flex-row justify-center items-center">
        <div className="select-enemy text-2xl font-bold mt-10 absolute p-select flex flex-row  ">
          {Object.keys(characterPack).map((characterPack) => (
            <CharactersInComponent
              key={characterPack}
              characterPack={characterPack}
              handleCharacterPackChange={handleCharacterPackChange}
              characters={characters}
              handleCharacterPackHover={handleCharacterPackHover}
              handleCharacterPackLeave={handleCharacterPackLeave}
            />
          ))}
        </div>
        {lastSelectedCharacterPack && (
          <div className="select-enemy-cards text-sm mt-80 w-[800px] text-center absolute p-cards flex  items-center justify-center ">
            <MiniCharacterCards
              lastSelectedCharacterPack={lastSelectedCharacterPack}
            />
          </div>
        )}
      </div>
    </div>
  );
}
