import { useSelector } from "react-redux";
import "./RemainingCards.css";

export default function RemainingCards({ position, player }) {
  const remainingCards = useSelector(
    (state) =>
      state.hand.cardBaseCount[player === "player" ? "player" : "enemy"]
  );

  return (
    <div className="remaining-cards absolute transition-all duration-300 ease-in-out" style={position}>
      <svg
        className="absolute remaining-bar-text remaining-bar-name-svg"
        width="180"
        height="40"
        style={{ transform: "rotate(93deg)", transformOrigin: "left bottom" }}
      >
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
            className="remaining-text"
          >
            Kalan Kartlar
          </textPath>
        </text>
      </svg>
      <div className=" ">
        <p
          className="text-center text-xl z-10 font-normal remaining-bar-counter  fixed flex flex-col justify-center items-center absolute"
          style={{ transform: "rotate(90deg)", transformOrigin: "left bottom" }}
        >
          {remainingCards}
        </p>
      </div>
    </div>
  );
}
