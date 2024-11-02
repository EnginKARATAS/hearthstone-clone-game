import "./MiniCharacterCards.css";
import { characterPack } from "../../../../../assets/characterPack";
export default function MiniCharacterCards({ selectedCharacterPack }) {
  return (
    <div className="mini-character-cards">
      <div className="grid grid-cols-8">
        {characterPack[selectedCharacterPack].map((character) => (
          <div key={character.cardId}>
          <img
            width="50"
            src={`/cards/card-images/${selectedCharacterPack}/${character.image}.png`}
            alt={character.image}
          />
          </div>
        ))}
      </div>
    </div>
  );
}
