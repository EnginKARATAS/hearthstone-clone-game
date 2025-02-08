import Profile from "../Profile";
import "./EnemyProfile.css";
import ManaBox from "../../ManaBox/ManaBox";
import Hand from "../../../Card/Hand/Hand";
import Board from "../../../Card/Board/Board";
import { useSelector, useDispatch } from "react-redux";
import RemainingCards from "../../../Card/RemainingCards/RemainingCards";
import { WINDOW_HEIGHT } from "../../../../../constants/dimensions";

export default function EnemyProfile() {
  const enemyBoardCards = useSelector((state) => state.hand.board.enemy);
  const profile = useSelector((state) => state.hand.profile.enemy);
  return (
    <div className="absolute enemy-profile ">
      <Profile
        img={{ pack: profile.cardPack, photo: "hero-yavuz" }}
        position={{
          top: WINDOW_HEIGHT > 768 ? 145 : 100,
          left: WINDOW_HEIGHT > 768 ? 7 : -310,
        }}
        player="enemy"
      />
      {/* <ManaBox position={{ top: 108, left: 218 }} player="enemy" /> */}
      <Hand
        player="enemy"
        position={{
          top: WINDOW_HEIGHT > 768 ? 12 : 50,
          left: WINDOW_HEIGHT > 768 ? -558 : -804,
        }}
      ></Hand>
      <RemainingCards
        player="enemy"
        position={{
          top: WINDOW_HEIGHT > 768 ? 184 : 41,
          right: WINDOW_HEIGHT > 768 ? -547 : 26,
        }}
      />
      <Board
        player="enemy"
        position={{ top: 300, left: -150 }}
        boardCards={enemyBoardCards}
      />
    </div>
  );
}
