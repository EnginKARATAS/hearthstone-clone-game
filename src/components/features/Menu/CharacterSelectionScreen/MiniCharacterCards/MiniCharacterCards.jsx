import "./MiniCharacterCards.css";
import { characterPack } from "../../../../../assets/characterPack";
export default function MiniCharacterCards({ lastSelectedCharacterPack }) {
  return (
      <div className="grid grid-cols-4">
        {characterPack[lastSelectedCharacterPack]?.map((character) => (
          <div key={character.cardId}>
          <img
            width="50"
            src={`/cards/card-images/${lastSelectedCharacterPack}/${character.image}.png`}
            alt={character.image}
          />
          </div>
        ))}
      </div>
  );
}
