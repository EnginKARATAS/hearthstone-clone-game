import "./SingleGameCard.css";
import { useSelector } from "react-redux";
import { closeSingleCard } from "../../hand/handSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function SingleGameCard({ position }) {
  const singleCard = useSelector((state) => state.hand.singleCard);
  const dispatch = useDispatch();
  //useEffect(() => {
  // console.log("singleCard", singleCard);
  //setTimeout(() => {
  //   dispatch(closeSingleCard());
  //}, 5000);
  // }, [singleCard]);

  return (
    singleCard && (
      <div
        className="single-game-card absolute"
        onMouseLeave={() => dispatch(closeSingleCard(singleCard))}
        onClick={() => dispatch(closeSingleCard())}
        style={{
          left: position?.left,
          bottom: position?.bottom,
        }}
      >
        <img
          src="/public/cards/card-images/blank.png"
          alt="game card"
          className="game-single-card-image"
        />

        <span className="absolute single-card-cost">
          {singleCard?.cardCost}
        </span>
        <img
          className="absolute single-card-image"
          src={`/public/cards/card-images/${singleCard?.cardPack}/${singleCard?.cardImageName}.png`}
          alt="card artwork"
        />
        <svg className="absolute single-card-name-svg" width="180" height="40">
          <path
            id="sPath"
            d="M10,50 Q40,35 90,30 T200,30"
            fill="none"
            stroke="none"
          />
          <text>
            <textPath href="#sPath" startOffset="50%" textAnchor="middle">
              {singleCard?.cardName}
            </textPath>
          </text>
        </svg>
        <span className="absolute single-card-description">
          {singleCard?.cardDescription}
        </span>
        <span className="absolute single-card-attack">
          {singleCard?.cardAttack}
        </span>
        <span className="absolute single-card-health">
          {singleCard?.cardHealth}
        </span>
      </div>
    )
  );
}
