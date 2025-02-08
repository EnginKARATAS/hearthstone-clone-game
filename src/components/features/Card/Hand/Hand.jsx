import { useMemo } from "react";
import { WINDOW_HEIGHT } from "../../../../constants/dimensions";
import GameCard from "../GameCard/GameCard";
import "./Hand.css";
import { useSelector } from "react-redux";

export default function Hand({ player, position }) {
  const handCards = useSelector(
    (state) => state.hand.hand[player === "player" ? "player" : "enemy"]
  );

  const renderedHandCards = useMemo(() => {
    return (
      handCards &&
        handCards.map((card) => {
          return (
              <GameCard
                player={player}
                card={card}
                deg={card.deg}
                position={{
                  x: card.cardPosition.x,
                  y: player === "player" ? -15 : -97,
                  size: WINDOW_HEIGHT > 768 ? 150 : 100,
                  offset: -card.cardPosition.offset,
                  top: WINDOW_HEIGHT > 768 ? card.cardPosition.top : -18,
                }}
                key={card.cardId}
              />
        );
      })
    );
  }, [handCards, player]);



  return (
    <div
      className="hand flex absolute"
      style={{
        clipPath:
          player === "player"
            ? WINDOW_HEIGHT > 768
              ? "polygon(0px -32%, 203% -114%, 203% 72%, 4% 73%)"
              : ""
            : WINDOW_HEIGHT > 768
            ? "polygon(0px 18%, 170% 18%, 340% 18%, 128% 99%)"
            : "",
        left: WINDOW_HEIGHT > 768 ? position?.left : position?.left * 1.1,
        bottom: player === "player" ? position?.bottom : "",
        top: player === "enemy" ? position?.top : "",
      }}
    >
      {renderedHandCards}
    </div>
  );
}
