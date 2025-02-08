import "./BoardCard.css"; 
import { useDispatch } from "react-redux";
import {
  hoverSingleCard,
  closeSingleCard,
  clickBoardCard,
  removeBoardCard,
} from "../../hand/handSlice";
import { useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";

export default function BoardCard({ position, boardCard }) {
  const dispatch = useDispatch();
  
  const boardCards = useSelector((state) => state.hand.board);

  const playerBoardCards = useMemo(() => boardCards.player, [boardCards.player]);
  const enemyBoardCards = useMemo(() => boardCards.enemy, [boardCards.enemy]);

  useEffect(() => {
    playerBoardCards.forEach((card) => {
      if (card.cardHealth <= 0) {
        dispatch(removeBoardCard(card));
      }
    });
    enemyBoardCards.forEach((card) => {
      if (card.cardHealth <= 0) {
        dispatch(removeBoardCard(card));
      }
    });
  }, [playerBoardCards, enemyBoardCards, dispatch]);

  const onMouseOver = useCallback((card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
    }, 200);
  }, [dispatch]);

  const onMouseLeave = useCallback((card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
    }, 200);
  }, [dispatch]);

  const onClickBoardCard = useCallback((card) => {
    if (card.isPlayedLastTurn || card.cardOwner !== "player") {
      dispatch(closeSingleCard());
      dispatch(clickBoardCard({ clickedCard: card, actionMaker: "player" }));
    }
  }, [dispatch]);

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
          ? `4px dashed ${boardCard?.borderColor}`
          : `0px solid ${boardCard?.borderColor}`,
        borderRadius: "46%",
      }}
    >
      <img src="/cards/card-images/board_blank.png" className="board-frame" />
      <img
        className="board-card-image absolute"
        src={`/cards/card-images/${boardCard?.cardPack}/${boardCard?.cardImageName}.png`}
      />
      <span className="board-card-attack absolute text-white">
        {boardCard?.cardAttack}
      </span>
      <span className="board-card-health absolute text-white">
        {boardCard?.cardHealth}
      </span>
    </div>
  );
}
