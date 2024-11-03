import "./MiniCharacterCards.css";
import { characterPack } from "../../../../../assets/characterPack";
export default function MiniCharacterCards({ lastSelectedCharacterPack }) {
  return (
    <div className="mini-character-cards">
      <div className=" flex flex-row-reverse flex-wrap">
        {characterPack[lastSelectedCharacterPack]?.map((character) => (
          <div key={character.cardId}>
            <img
            className="gridding"
              width="45"
              src={`/cards/card-images/${lastSelectedCharacterPack}/${character.image}.png`}
              alt={character.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
