import { InitialState } from "../../../../../types/Card";
import { Card } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import CastableCard from "../../abstracts/CastableCard";

export class HealRandomCard extends CastableCard implements Castable {
  constructor(amount: number) {
    super(amount);
  }
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    const randomCard = state.board[actionMaker][Math.floor(Math.random() * state.board[actionMaker].length)];
    randomCard.cardHealth += this.amount;
    debugger
  }
}
