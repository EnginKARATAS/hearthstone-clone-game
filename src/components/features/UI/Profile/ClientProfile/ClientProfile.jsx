import Profile from "../Profile";
import Hand from "../../../Card/Hand/Hand";
import ManaBox from "../../ManaBox/ManaBox";
import "./ClientProfile.css";
import SingleGameCard from "../../../Card/GameCard/SingleGameCard";
import Board from "../../../Card/Board/Board";
export default function ClientProfile({ player, position }) {
  return (
    <div className="absolute client-profile">
      <Board player="player" position={{ top: -497, left: 150 }} />
      <Profile
        className="enemy-profile"
        img={{ pack: "engin-pack", photo: "hero-engin" }}
        position={{ left: 4, bottom: 216 }}
        player="player"
      />
      <ManaBox position={{ top: -149, left: 246 }} />
      <Hand
        position={{ bottom: -15, left: -580 }}
        player={player}
        className="hand"
      />
      <SingleGameCard position={{ bottom: 280, left: -600 }} />
    </div>
  );
}
