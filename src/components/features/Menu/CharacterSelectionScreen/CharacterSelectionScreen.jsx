import "./CharacterSelectionScreen.css";
import CharactersInComponent from "./CharactersInComponent/CharactersInComponent";
import { characterPack } from "../../../../assets/characterPack";
import MiniCharacterCards from "./MiniCharacterCards/MiniCharacterCards";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function CharacterSelectionScreen({ dispatchGameState }) {
  const { t } = useTranslation();
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

  const startGame = () => {
    dispatchGameState("playing")
  }
  return (
    <div
      //onClick={() => dispatchGameState("playing")}
      className="character-selection-screen absolute z-25"
    >
      <div className="middle-image absolute">
        <img src="/menu/loading/hearthstone.png" alt="heartstone" />
      </div>
      <img
        width="33px"
        src="/left-arrow.svg"
        style={{
          height: 59,
          bottom: 0,
          right: 0,
          width: 64,
        }}
        className="pause-button p-2 rounded-md absolute"
        onClick={() => dispatchGameState("menu")}
      ></img>
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
          <h1 className="p1-character-name">{t("player1")}</h1>
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
          <h1 className="p2-character-name">{t("player2")}</h1>
        </div>
      </div>

      <div className="mini-container flex flex-row justify-center items-center">
        <div className="select-character text-2xl font-bold mt-10 absolute p-select flex flex-col  ">
          <h3 className="select-character-title">{t("selectCharacter")}</h3>
          <div className="flex flex-row justify-center items-center">
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
        </div>
        {characters[0] && characters[1] && (
          <button
            className="start-game-button absolute"
            onClick={startGame}
          >
            <span className="text-black text-xl ">{t("start")}</span>
          </button>
        )}
        {lastSelectedCharacterPack && (
          <div className="select-enemy-cards text-sm mt-80 w-[800px] text-center absolute p-cards flex  items-center justify-center">
            <img
              className="absolute mini-character-image-left"
              src={`/cards/card-images/${lastSelectedCharacterPack}/${lastSelectedCharacterPack}.png`}
              alt="selected-character"
            />
            <div className="absolute mini-character-text-container flex justify-end items-center">
              <h3 className="mini-character-title text-center">
                {lastSelectedCharacterPack.split("-")[0].toUpperCase()}{" "}
                {lastSelectedCharacterPack.split("-")[1].toUpperCase()}
              </h3>
              <h3 className="mini-character-text absolute">
                {t(`characterDescription.${lastSelectedCharacterPack}`)}
              </h3>
            </div>
            <div className="mini-character-cards absolute ">
              <MiniCharacterCards
                lastSelectedCharacterPack={lastSelectedCharacterPack}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
