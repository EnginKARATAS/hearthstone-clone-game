import "./GameCard.css";
import { useDispatch } from "react-redux";
import { hoverSingleCard, addCardToBoard } from "../../hand/handSlice.ts";
import { useState } from "react";
import { decrement, isCardPlayable } from "../../counter/counterSlice";
import { useSelector } from "react-redux";
export default function GameCard({ position, card, player, deg }) {
  const dispatch = useDispatch();
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const inGameMana = useSelector((state) => state.counter.inGameMana);

  const [zIndex, setZIndex] = useState(0);

  const onMouseOver = (card) => {
    setTimeout(() => {
      dispatch(hoverSingleCard(card));
      setZIndex(2);
    }, 200);
  };

  const onMouseLeave = () => {
    setTimeout(() => {
      dispatch(hoverSingleCard(null));
      setZIndex(0);
    }, 200);
  };

  const onClick = async () => {
    const res = await dispatch(isCardPlayable(card));
    if (res && isClientTurn === true && inGameMana[card.cardOwner] >= card.cardCost) {
      dispatch(addCardToBoard(card, player));
    }
  };

  return (
    <div>
      {player === "player" ? (
        <div
          className="game-card relative"
          onMouseOver={() => onMouseOver(card)}
          onMouseLeave={() => onMouseLeave(card)}
          onClick={() => onClick(card)}
          style={{
            left: position.x,
            top: position.y - 30 * zIndex + position.top,
            width: position.size,
            marginLeft: position.offset,
            zIndex: zIndex,
            transform: `rotate(${+deg}deg)`
          }}
        >
          <img
            src="/cards/card-images/blank.png"
            alt="game card"
            className="game-card-frame"
          />

          <span className="absolute card-cost">{card.cardCost}</span>
          <img
            className="absolute card-image"
            src={`/cards/card-images/${card.cardPack}/${card.cardImageName}.png`}
          />
          <svg className="absolute card-name-svg" width="100" height="20">
            <path
              id="wavyPath"
              d="M-3,17 Q25,15 50,10 Q75,5 100,13"
              fill="none"
              strokeWidth="1"
            />
            <text>
              <textPath href="#wavyPath" startOffset="50%" textAnchor="middle">
                {card.cardName}
              </textPath>
            </text>
          </svg>
          <span className="absolute card-description">
            {card.cardDescription}
          </span>
          <span className="absolute card-attack">{card.cardAttack}</span>
          <span className="absolute card-health">{card.cardHealth}</span>
        </div>
      ) : (
        <div
          className="backside-game-card relative"
          style={{
            left: position.x,
            width: position.size,
            marginLeft: position.offset,
            zIndex: zIndex,
            top: -110
          }}
        >
          <img
            className="backside-image"
            style={{
              transform: `rotate(${-deg}deg)`,
            }}
            src={`/cards/card-images/card-back.png`}
          />
        </div>
      )}
    </div>
  );
}
