import "./BoardCard.css";
import { useDispatch } from "react-redux";
import {
  hoverSingleCard,
  closeSingleCard,
  clickBoardCard,
} from "../../hand/handSlice";

export default function BoardCard({position, boardCard }) {
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
    if (card.isPlayedLastTurn || card.cardOwner !== "player") {//do not chech last turn if not player (is enemy)
      dispatch(closeSingleCard());
      dispatch(clickBoardCard({ clickedCard: card, actionMaker: "player" }));
    }
  };

  return (
    <div
      key={boardCard.id}
      onClick={() => onClickBoardCard(boardCard)}
      onMouseOver={() => onMouseOver(boardCard)}
      onMouseLeave={() => onMouseLeave(boardCard)}
      className="absolute board-card transition-all duration-300 ease-in-out hover:-translate-y-2"
      style={{
        left: position.left,
        marginRight: position.offset,
        border: boardCard?.borderColor
          ? `3px solid ${boardCard?.borderColor}`
          : "none",
        borderRadius: "46%",
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
