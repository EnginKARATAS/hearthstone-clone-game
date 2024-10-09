import "./BoardCard.css";
export default function BoardCard({ position, boardCard }) {
  return (
    <div
      className="absolute board-card"
      style={{
        left: position.left,
        marginRight: position.offset,
      }}
    >
      <img
        src="/public/cards/card-images/board_blank.png"
        className="board-frame"
      />
      
      <img
        className=" board-card-image absolute"
        src={`/public/cards/card-images/${boardCard?.cardPack}/${boardCard?.cardImageName}.png`}
      />
      <span className=" board-card-attack absolute text-white">
        {boardCard?.cardAttack}
      </span>
      <span className=" board-card-health absolute text-white">
        {boardCard?.cardHealth}
      </span>
    </div>
  );
}
