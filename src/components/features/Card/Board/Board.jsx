import "./Board.css";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../../../../constants/dimensions";

export default function Board({ player, position }) {
  const playerBoardCards = useSelector((state) => state.hand.board.player);
  const enemyBoardCards = useSelector((state) => state.hand.board.enemy);

  return (
    <div>
      {player === "player" && playerBoardCards && (
        <div
          className="board-cards absolute flex player-board"
          style={{
            top: WINDOW_HEIGHT > 768 ? -495 : -246,
            left:
              WINDOW_HEIGHT > 768
                ? 55 - playerBoardCards.length * 50
                : -57 - playerBoardCards.length * 23,
          }}
        >
          {playerBoardCards.map((boardCard, i) => {
            return (
              <BoardCard
                position={{
                  left: WINDOW_HEIGHT > 768?i * 100: i*50,
                  offset: 11,
                }}
                boardCard={boardCard}
                key={boardCard.cardId}
              />
            );
          })}
        </div>
      )}
      {player === "enemy" && enemyBoardCards && (
        <div
          className="board-cards absolute flex enemy-board"
          style={{
            top: WINDOW_HEIGHT > 768 ? 310 : 180,
            left:
              WINDOW_HEIGHT > 768
                ? 55 - enemyBoardCards.length * 50
                : -305 - enemyBoardCards.length * 23,
          }}
        >
          {enemyBoardCards.map((enemyBoardCard, i) => {
            return (
              <BoardCard
                player="enemy"
                position={{
                  left: WINDOW_HEIGHT > 768?i * 100: i*50,
                  offset: 555,
                }}
                boardCard={enemyBoardCard}
                key={enemyBoardCard.cardId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
