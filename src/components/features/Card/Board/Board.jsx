import "./Board.css";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard";

export default function Board({ player, position }) {
  const playerBoardCards = useSelector((state) => state.hand.board.player);
  const enemyBoardCards = useSelector((state) => state.hand.board.enemy);
 
  return (
    <div>
      {player === "player" && playerBoardCards && (
        <div
          className="board-cards absolute flex player-board"
          style={{ top: -495, left: 55 - playerBoardCards.length * 50 }}
        >
          {playerBoardCards.map((boardCard, i) => {
            return (
              <BoardCard
                position={{
                  left: i * 100,
                offset: 555,
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
          style={{ top: 310, left: 55 - enemyBoardCards.length * 50}}
        >
          {enemyBoardCards.map((enemyBoardCard, i) => {
            return (
              <BoardCard
                player="enemy"
                position={{
                  left: 100 * i,
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
