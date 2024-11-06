import "./BoardCard.css";
import { useDispatch } from "react-redux";
import {
  hoverSingleCard,
  closeSingleCard,
  clickBoardCard,
} from "../../hand/handSlice";

export default function BoardCard({ position, boardCard }) {
  const dispatch = useDispatch();
  const onMouseOver = (card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
    }, 200);
  };

  const onMouseLeave = (card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
    }, 200);
  };

  const onClickBoardCard = (card) => {
    if (card.isPlayedLastTurn) {
      dispatch(closeSingleCard());
      dispatch(clickBoardCard({ clickedCard: card, actionMaker: "player" }));
    }
  };

  return (
    <div
      onClick={() => onClickBoardCard(boardCard)}
      onMouseOver={() => onMouseOver(boardCard)}
      onMouseLeave={() => onMouseLeave(boardCard)}
      className="absolute board-card"
      style={{
        left: position.left,
        marginRight: position.offset,
        border: boardCard?.borderColor
          ? `4px solid ${boardCard?.borderColor}`
          : "none",
      }}
    >
      <img src="/cards/card-images/board_blank.png" className="board-frame" />
      <img
        className=" board-card-image absolute"
        src={`/cards/card-images/${boardCard?.cardPack}/${boardCard?.cardImageName}.png`}
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
