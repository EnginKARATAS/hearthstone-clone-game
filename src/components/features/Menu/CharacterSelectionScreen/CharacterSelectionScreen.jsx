import "./CharacterSelectionScreen.css";
import CharactersInComponent from "./CharactersInComponent/CharactersInComponent";
import { characterPack } from "../../../../assets/characterPack";
import MiniCharacterCards from "./MiniCharacterCards/MiniCharacterCards";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import GameBoard from "../../../GameBoard";
import { useDispatch, useSelector } from "react-redux";
import { setCardBase, setProfile } from "../../hand/handSlice";

export default function CharacterSelectionScreen({ dispatchGameState }) {
  const playCount = useSelector((state) => state.game.playCount);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  const [lastSelectedCharacterPack, setLastSelectedCharacterPack] = useState("");
  const [characters, setCharacters] = useState([null, null]);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectGameMode, setSelectGameMode] = useState(true);
  const [clickAdventureMode, setClickAdventureMode] = useState(false);

  const handleCharacterPackChange = (characterPack) => {
    const [char1, char2] = characters;
    
    const newCharacters = 
      !char1 && !char2 ? [characterPack, null] :
      characterPack === char1 && !char2 ? [null, null] :
      char2 ? (
        characterPack === char2 ? [null, null] : [char1, null]
      ) : [char1, characterPack];
    
    setCharacters(newCharacters);
  };

  const startGame = () => {
    const [char1, char2] = characters;
    if (char1 && char2) {
      const characterData = { p1Name: char1, p2Name: char2 };
      dispatch(setCardBase({ characters: characterData }));
      dispatch(setProfile(characterData));
      setGameStarted(true);
      dispatchGameState("playing");
    }
  };

  const handleResetAndGoBack = () => {
    setSelectGameMode(true);
    setClickAdventureMode(false);
    setCharacters([null, null]);
  };

  const renderCharacterImage = (character, playerNum) => {
    if (!character) return null;
    
    const pennantColor = playerNum === 1 ? 'green' : 'red';
    const playerClass = playerNum === 1 ? 'p1' : 'p2';
    
    return (
      <>
        <img
          className={`absolute ${pennantColor}-pennant`}
          src={`/menu/menu/selection/${pennantColor}-pennant.png`}
          alt={`${pennantColor}-pennant`}
        />
        <img
          className={`relative ${playerClass}-character`}
          src={`/cards/card-images/${character}/${character}.png`}
          alt={`${playerClass}-character`}
        />
        <div className="flex justify-center items-center player-name-container absolute">
          <h1 className={`${playerClass}-character-name`}>
            {t(`player${playerNum}`)}
          </h1>
        </div>
      </>
    );
  };

  const renderGameModeSelection = () => (
    <>
      <h3 className="select-character-title">{t("selectGameMode")}</h3>
      <div className="flex flex-row justify-center items-center">
        <button
          className="select-game-mode-button absolute mt-1"
          onClick={() => setSelectGameMode(false)}
        >
          <span className="text-black text-xl">{t("playWithComputer")}</span>
        </button>
        <button
          className="select-game-mode-button absolute mt-20"
          onClick={() => {
            setSelectGameMode(false);
            setClickAdventureMode(true);
          }}
        >
          <span className="text-black text-xl">{t("adventureMode")}</span>
        </button>
      </div>
    </>
  );

  const renderCharacterSelection = () => (
    <div className="">
      <h3 className="select-character-title">{t("selectCharacter")}</h3>
      <div className="flex flex-row justify-center items-center">
        {Object.keys(characterPack).map((characterPack) => (
          <CharactersInComponent
            key={characterPack}
            characterPack={characterPack}
            handleCharacterPackChange={handleCharacterPackChange}
            characters={characters}
            handleCharacterPackHover={setLastSelectedCharacterPack}
            handleCharacterPackLeave={() => setLastSelectedCharacterPack("")}
          />
        ))}
      </div>
    </div>
  );

  const renderAdventureMode = () => (
    <div className="">
      <h3 className="select-character-title">{t("selectCharacter")}</h3>
      <div className="flex flex-row justify-center items-center">
        <h3 className="text-2xl font-bold text-center text-white">
          {t("adventureModeText")}
        </h3>
        <button
          className="select-game-mode-button absolute mt-8"
          onClick={handleResetAndGoBack}
        >
          <span className="text-black text-xl">{t("goBack")}</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="character-selection-screen absolute z-25">
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
      />
      
      <div className="p1-character-container text-5xl font-bold absolute">
        {renderCharacterImage(characters[0], 1)}
      </div>

      <div className="p2-character-container text-5xl font-bold absolute">
        {renderCharacterImage(characters[1], 2)}
      </div>

      <div className="mini-container flex flex-row justify-center items-center">
        <div className="select-character text-2xl font-bold mt-10 absolute p-select flex flex-col">
          {selectGameMode && renderGameModeSelection()}
          {!selectGameMode && !clickAdventureMode && renderCharacterSelection()}
          {!selectGameMode && clickAdventureMode && renderAdventureMode()}
        </div>

        {gameStarted && <GameBoard key={playCount} className="board" />}
        
        {!characters.includes(null) && !selectGameMode && !clickAdventureMode && (
          <div className="">
            <button className="start-game-button absolute" onClick={startGame}>
              <span className="text-black text-xl">{t("start")}</span>
            </button>
            <button
              className="start-game-button absolute mt-20"
              onClick={handleResetAndGoBack}
            >
              <span className="text-black text-xl">{t("goBack")}</span>
            </button>
          </div>
        )}

        {lastSelectedCharacterPack && (
          <div className="select-enemy-cards text-sm mt-[280px] w-[800px] text-center absolute p-cards flex items-center justify-center">
            <img
              className="absolute mini-character-image-left"
              src={`/cards/card-images/${lastSelectedCharacterPack}/${lastSelectedCharacterPack}.png`}
              alt="selected-character"
            />
            <div className="absolute mini-character-text-container flex justify-end items-center justify-center w-[200px]">
              <h3 className="mini-character-title text-center">
                {lastSelectedCharacterPack.split("-").map(word => word.toUpperCase()).join(" ")}
              </h3>
              <h3 className="mini-character-text absolute">
                {t(`characterDescription.${lastSelectedCharacterPack}`)}
              </h3>
            </div>
            <div className="mini-character-cards absolute">
              <MiniCharacterCards lastSelectedCharacterPack={lastSelectedCharacterPack} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

