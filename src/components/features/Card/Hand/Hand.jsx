import GameCard from "../GameCard/GameCard";
import "./Hand.css";
import { useSelector } from "react-redux";

export default function Hand({ player, position }) {
  const handCards = useSelector((state) => state.hand.hand[player === "player" ? "player" : "enemy"]);;

  return (
    <div
      className="hand flex absolute"
      style={{
        clipPath:
          player === "player"
            ? "polygon(0px -32%, 203% -114%, 203% 72%, 4% 73%)"
            : "polygon(0px 18%, 170% 18%, 340% 18%, 128% 99%)",
        left: position?.left,
        bottom: player === "player" ? position?.bottom : "",
        top: player === "enemy" ? position?.top : "",
      }}
    >
      {handCards &&
        handCards.map((card, i) => {
          return (
            <GameCard
              player={player}
              card={card}
              deg={card.deg}
              position={{
                x: card.cardPosition.x,
                y: player === "player" ? 0 : -97,
                size: 150,
                offset: -card.cardPosition.offset,
                top: card.cardPosition.top
              }}
              key={card.cardId}
            />
          );
        })}
    </div>
  );
}
