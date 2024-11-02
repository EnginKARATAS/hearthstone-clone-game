export default function CharactersInComponent({ characterPack, handleCharacterPackChange }) {
  return (
    <div onClick={() => handleCharacterPackChange(characterPack)}>
      <img
        width="50"
        src={
          "/cards/card-images/" + characterPack + "/" + characterPack + ".png"
        }
        alt={characterPack}
      />
    </div>
  );
}
