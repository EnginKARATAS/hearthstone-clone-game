import { Card, InitialState } from "../../../../../types/Card.ts";
import { Castable } from "../../../abstract/Castable.ts";
import CastableCard from "../../abstracts/CastableCard.ts";

export class HealRandomCard extends CastableCard implements Castable {
  constructor(amount: number) {
    super(amount);
  }
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    const randomCard = state.board[actionMaker][Math.floor(Math.random() * state.board[actionMaker].length)];
    randomCard.cardHealth += this.amount;
  }
}
