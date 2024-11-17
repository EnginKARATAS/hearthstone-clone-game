import Profile from "../Profile";
import Hand from "../../../Card/Hand/Hand";
import ManaBox from "../../ManaBox/ManaBox";
import "./ClientProfile.css";
import SingleGameCard from "../../../Card/GameCard/SingleGameCard";
import Board from "../../../Card/Board/Board";
import RemainingCards from "../../../Card/RemainingCards/RemainingCards";
import { useSelector } from "react-redux";

export default function ClientProfile({ player, position }) {
  const profile = useSelector((state) => state.hand.profile.player);
  return (
    <div className="absolute client-profile"
    style={{
      bottom: window.innerHeight < 768 ? 415:-44,
      left: window.innerHeight < 768 ? 388:631,
    }}
    >
      <Board player="player" position={{ top: -497, left: 150 }} />
      <RemainingCards player="player" position={{ top: -545, right: -558 }} />
      <Profile
        className="enemy-profile"
        img={{ pack: profile.cardPack }}
        position={{ 
          left: window.innerHeight > 768 ? 10 : -69,
          bottom: window.innerHeight > 768 ? 227 : 50,
        }}
        player="player"
      />
      <ManaBox position={{ top: -151, left: 253 }} player="player" />
      <Hand
        position={{ bottom: -15, left: -580 }}
        player={player}
        className="hand"
      />
      <SingleGameCard position={{ bottom: 280, left: -600 }} />
    </div>
  );
}
