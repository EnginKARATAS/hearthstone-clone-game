import { pullRandomCard } from "../../../../../components/features/hand/cardService";
import { Card, InitialState } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import CastableCard from "../../abstracts/CastableCard";

export class DrawCard implements Castable {
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    state.hand[actionMaker].push(
      pullRandomCard({ isEnemy: actionMaker === "enemy" })
    );
  }
}
