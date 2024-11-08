import { InitialState } from "../../../../../types/Card";
import { Card } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import CastableCard from "../../abstracts/CastableCard";

export class DealAll extends CastableCard implements Castable {
  constructor(amount: number) {
    super(amount);
  }
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    state.board[actionMaker === "player" ? "enemy" : "player"].forEach((boardCard) => {
      boardCard.cardHealth -= this.amount;
    });
    state.board[actionMaker === "player" ? "player" : "enemy"].forEach((boardCard) => {
      boardCard.cardHealth -= this.amount;
    });
    state.profile[actionMaker === "player" ? "enemy" : "player"]!.cardHealth -= this.amount;
    state.profile[actionMaker === "player" ? "player" : "enemy"]!.cardHealth -= this.amount;
  }
}
