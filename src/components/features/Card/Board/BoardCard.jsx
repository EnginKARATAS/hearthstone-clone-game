import "./BoardCard.css";
import { useDispatch } from "react-redux";
import {
  hoverSingleCard,
  closeSingleCard,
  clickBoardCard,
  removeBoardCard,
} from "../../hand/handSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function BoardCard({ position, boardCard }) {
  const boardCards = useSelector((state) => state.hand.board);
  useEffect(() => {
    const playerBoardCards = boardCards.player;
    const enemyBoardCards = boardCards.enemy;
    console.log(playerBoardCards, enemyBoardCards);
    playerBoardCards.forEach((card) => {
      card.cardHealth <= 0 && dispatch(removeBoardCard(card));
    });
    enemyBoardCards.forEach((card) => {
      card.cardHealth <= 0 && dispatch(removeBoardCard(card));
    });
  }, [boardCards]);

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
    if (card.isPlayedLastTurn || card.cardOwner !== "player") {
      //do not chech last turn if not player (is enemy)
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
      className="absolute board-card transition-all duration-100 ease-in-out hover:-translate-y-2"
      style={{
        left: position.left,
        marginRight: position.offset,
        border: boardCard?.borderColor
          ? `3px solid ${boardCard?.borderColor}`
          : `0px solid ${boardCard?.borderColor}`,
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
