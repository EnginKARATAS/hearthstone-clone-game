import { InitialState } from "../../../../../types/Card";
import { Card } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import CastableCard from "../../abstracts/CastableCard";

export class DealAllEnemyMinions extends CastableCard implements Castable {
  constructor(amount: number) {
    super(amount);
  }
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    state.board[actionMaker === "player" ? "enemy" : "player"].forEach((boardCard) => {
      boardCard.cardHealth -= this.amount;
    });
  }
}
