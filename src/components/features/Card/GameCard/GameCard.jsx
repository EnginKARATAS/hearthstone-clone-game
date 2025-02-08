import "./GameCard.css";
import { useDispatch } from "react-redux";
import { hoverSingleCard, addCardToBoard } from "../../hand/handSlice.ts";
import { useState, useCallback } from "react";
import { decrement, isCardPlayable } from "../../counter/counterSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { WINDOW_HEIGHT } from "../../../../constants/dimensions";

export default function GameCard({ position, card, player, deg }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isClientTurn = useSelector((state) => state.counter.isClientTurn);
  const inGameMana = useSelector((state) => state.counter.inGameMana);
  const boardCards = useSelector((state) => state.hand.board[player]);

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

  const onClick = useCallback(async () => {
    const res = await dispatch(isCardPlayable(card));
    if (res && isClientTurn === true && inGameMana[card.cardOwner] >= card.cardCost && boardCards.length < 7) {
      dispatch(addCardToBoard(card, player));
    }
  }, [dispatch, isClientTurn, inGameMana, card, boardCards.length, player]);

  return (
    <div>
      {player === "player" ? (
        <div
          className="game-card relative transform transition-all duration-300 ease-in-out"
          onMouseOver={() => onMouseOver(card)}
          onMouseLeave={() => onMouseLeave(card)}
          onClick={() => onClick(card)}
          style={{
            left:WINDOW_HEIGHT > 768? position.x:position.x*0.5+300,
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
                {t(`cards.${card.cardImageName}.name`)}
              </textPath>
            </text>
          </svg>
          <span className="absolute card-description">
            {t(`cards.${card.cardImageName}.description`)}
          </span>
          <span className="absolute card-attack">{card.cardAttack}</span>
          <span className="absolute card-health">{card.cardHealth}</span>
        </div>
      ) : (
        <div
          className="backside-game-card relative transition-all duration-300 ease-in-out"
          style={{
            left: position.x,
            width: position.size,
            marginLeft: position.offset,
            zIndex: zIndex,
            top: WINDOW_HEIGHT > 768? -110: -71
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
