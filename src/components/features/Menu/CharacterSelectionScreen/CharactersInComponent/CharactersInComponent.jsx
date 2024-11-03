export default function CharactersInComponent({ characterPack, handleCharacterPackChange, characters }) {
  console.log(characters)
  console.log(characterPack)
  const handleBorder = (characterPack) => {
    if (characters[0] === characterPack) {
      return "1px solid white";
    } else if (characters[1] === characterPack) {
      return "1px solid white";
    }
    return "none";
  };
  return (
    <div onClick={() => handleCharacterPackChange(characterPack)}>
      <img
        width="50"
        style={{
          border: handleBorder(characterPack),
        }}
        src={
          "/cards/card-images/" + characterPack + "/" + characterPack + ".png"
        }
          alt={characterPack}
          />
    </div>
  );
}
