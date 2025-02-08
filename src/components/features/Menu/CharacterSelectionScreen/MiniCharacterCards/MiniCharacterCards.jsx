import "./MiniCharacterCards.css";
import { characterPack } from "../../../../../assets/characterPack";
import { useMemo } from "react";

export default function MiniCharacterCards({ lastSelectedCharacterPack }) {
  const miniCards = useMemo(() => {
    return characterPack[lastSelectedCharacterPack]?.slice(0,15).map((character) => (
      <div key={character.cardId}>
        <img
          className="gridding"
          width="45"
          src={`/cards/card-images/${lastSelectedCharacterPack}/${character.image}.png`}
          alt={character.image}
        />
      </div>
    ));
  }, [lastSelectedCharacterPack, characterPack]);

  return (
    <div className="mini-character-cards">
      <div className=" flex flex-row-reverse flex-wrap">
        {miniCards}
      </div>
    </div>
  );
}
