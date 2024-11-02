import { characterPack } from "../../../../../assets/characterPack";
export default function MiniCharacterCards({ selectedCharacterPack }) {
  return (
    <div className="flex flex-row">
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
  );
}
