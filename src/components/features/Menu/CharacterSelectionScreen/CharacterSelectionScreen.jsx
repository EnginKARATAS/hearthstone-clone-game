import "./CharacterSelectionScreen.css";
import CharactersInComponent from "./CharactersInComponent/CharactersInComponent";
import { characterPack } from "../../../../assets/characterPack";
import MiniCharacterCards from "./MiniCharacterCards/MiniCharacterCards";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import GameBoard from "../../../GameBoard"; // Import the GameBoard component
import { useDispatch } from "react-redux";
import { setCardBase, setProfile } from "../../hand/handSlice";
import { useSelector } from "react-redux";
export default function CharacterSelectionScreen({ dispatchGameState }) {
  const playCount = useSelector((state) => state.game.playCount);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [lastSelectedCharacterPack, setLastSelectedCharacterPack] =
    useState("");
  const [characters, setCharacters] = useState([null, null]);
  const [gameStarted, setGameStarted] = useState(false); // New state to track game start
  const [selectGameMode, setSelectGameMode] = useState(true);
  const [clickAdventureMode, setClickAdventureMode] = useState(false);
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
    if (characters[0] && characters[1]) {
      // Check if both characters are selected
      dispatch(
        setCardBase({
          characters: { p1Name: characters[0], p2Name: characters[1] },
        })
      );
      dispatch(setProfile({ p1Name: characters[0], p2Name: characters[1] }));
      setGameStarted(true); // Set game started to true
      dispatchGameState("playing");
    }
  };

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
            <div className="flex justify-center items-center player-name-container absolute">
              <h1 className="p1-character-name">{t("player1")}</h1>
            </div>
          </>
        )}
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
            <div className="flex justify-center items-center player-name-container absolute">
              <h1 className="p2-character-name">{t("player2")}</h1>
            </div>
          </>
        )}
      </div>

      <div className="mini-container flex flex-row justify-center items-center">
        <div className="select-character text-2xl font-bold mt-10 absolute p-select flex flex-col  ">
          {selectGameMode === true && (
            <>
              <h3 className="select-character-title">{t("selectGameMode")}</h3>
              <div className="flex flex-row justify-center items-center">
                <button
                  className="select-game-mode-button absolute mt-1"
                  onClick={() => setSelectGameMode(false)}
                >
                  <span className="text-black text-xl ">
                    {t("playWithComputer")}
                  </span>
                </button>
                <button
                  className="select-game-mode-button absolute mt-20"
                  onClick={() => {
                    setSelectGameMode(false);
                    setClickAdventureMode(true);
                  }}
                >
                  <span className="text-black text-xl ">
                    {t("adventureMode")}
                  </span>
                </button>
              </div>
            </>
          )}
          {selectGameMode === false && clickAdventureMode === false && (
            <div className="">
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
          )}
          {selectGameMode === false && clickAdventureMode === true && (
            <div className="">
              <h3 className="select-character-title">{t("selectCharacter")}</h3>
              <div className="flex flex-row justify-center items-center">
                <h3 className="text-2xl font-bold text-center text-white">
                  {t("adventureModeText")}
                </h3>
                <button
                  className="select-game-mode-button absolute mt-8"
                  onClick={() => {
                    setSelectGameMode(true);
                    setClickAdventureMode(false);
                  }}
                >
                  <span className="text-black text-xl">{t("goBack")}</span>
                </button>
              </div>
            </div>
          )}
        </div>
        {gameStarted && <GameBoard key={playCount} className="board" />}
        {!characters.includes(null) &&
          selectGameMode === false &&
          clickAdventureMode === false && (
            <div className="">
              <button className="start-game-button absolute" onClick={startGame}>
              <span className="text-black text-xl ">{t("start")}</span>
            </button>
            <button className="start-game-button absolute mt-20" onClick={() => {setSelectGameMode(true); setClickAdventureMode(false); setCharacters([null, null])}}>
                <span className="text-black text-xl ">{t("goBack")}</span>
              </button>
            </div>
        )}
        {lastSelectedCharacterPack && (
          <div className="select-enemy-cards text-sm mt-[280px] w-[800px] text-center absolute p-cards flex  items-center justify-center">
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
