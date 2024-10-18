import Profile from "../Profile";
import "./EnemyProfile.css";
import ManaBox from "../../ManaBox/ManaBox";
import Hand from "../../../Card/Hand/Hand";
import Board from "../../../Card/Board/Board";
import { useSelector, useDispatch } from "react-redux";
import RemainingCards from "../../../Card/RemainingCards/RemainingCards";

export default function EnemyProfile() {
  const enemyBoardCards = useSelector((state) => state.hand.board.enemy);
 
  return (
    <div className="absolute enemy-profile">
      <Profile
        img={{ pack: "yavuz-pack", photo: "hero-yavuz" }}
        position={{ top: 153, left: 6 }}
        player="enemy"
      />
      <ManaBox position={{ top: 108, left: 218 }} player="enemy" />
      <Hand player="enemy" position={{ top: 12, left: -541 }}></Hand>
      <RemainingCards player="enemy" position={{ top: 180, right: -583 }} />
      <Board
        player="enemy"
        position={{ top: 300, left: -150 }}
        boardCards={enemyBoardCards}
      />
    </div>
  );
}
