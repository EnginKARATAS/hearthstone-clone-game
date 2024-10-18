import { useSelector } from "react-redux";
import "./RemainingCards.css";

export default function RemainingCards({ position, player}) {
  const remainingCards = useSelector(state=>state.hand.cardBaseCount[player==="player"?"player":"enemy"])

  return (
    <div className="remaining-cards absolute" style={position}>
      <svg className="absolute remaining-bar-text remaining-bar-name-svg" width="180"  height="40" style={{transform: 'rotate(93deg)', transformOrigin: 'left bottom'}}>
        <path
          id="sPath"
          d="M10,50 Q40,35 90,30 T200,30"
          fill="none"
          stroke="none"
        />
        <text>
          <textPath
            href="#sPath"
            startOffset="50%"
            textAnchor="middle"
            className="card-name-text"
          >
            Kalan Kartlar
          </textPath>
        </text>
      </svg>
      <p
        className="text-xl z-10 font-normal remaining-bar-counter relative"
        style={{ transform: "rotate(90deg)", transformOrigin: "left bottom" }}
      >
      {remainingCards}
      </p>
    </div>
  );
}
