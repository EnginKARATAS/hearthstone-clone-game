export default function CharactersInComponent({ characterPack }) {
  return (
    <div className="">
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
