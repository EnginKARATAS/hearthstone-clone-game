export default function MiniCharacterCards({characterPack}) {
  return (
    <div className="flex flex-row">
       {characterPack["engin-pack"].map((character) => (
        <div key={character.cardId}>
          <img width="50" src={`/cards/card-images/engin-pack/${character.image}.png`} alt={character.image} />
        </div>
      ))}
    </div>
  );
}
