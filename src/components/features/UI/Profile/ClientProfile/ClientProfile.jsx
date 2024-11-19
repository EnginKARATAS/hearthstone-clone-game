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
    <div
      className="absolute client-profile "
      style={{
        bottom: window.innerHeight < 768 ? 415 : -44,
        left: window.innerHeight < 768 ? 388 : 631,
      }}
    >
      <Board player="player" position={{ top: -497, left: 150 }} />
      <RemainingCards player="player" position={{
                   top: window.innerHeight > 768 ? -545 :-345,
                   right: window.innerHeight > 768 ? -550 : -219,
         }} />
      <Profile
        className="enemy-profile"
        img={{ pack: profile.cardPack }}
        position={{
          left: window.innerHeight > 768 ? 5 : -69,
          bottom: window.innerHeight > 768 ? 227 : 50,
        }}
        player="player"
      />
      <ManaBox
        position={{
          top: window.innerHeight > 768 ? -151 : -66,
          left: window.innerHeight > 768 ? 253 : 52,
        }}
        player="player"
      />
      <Hand
        position={{ bottom: window.innerHeight > 768 ?-15:10, left: window.innerHeight > 768 ? -558 : -666 }}
        player={player}
        className="hand"
      />
      <SingleGameCard
        position={{
          bottom: window.innerHeight > 768 ? 280 : 40,
          left: window.innerHeight > 768 ? -600 : -420,
        }}
      />
    </div>
  );
}
