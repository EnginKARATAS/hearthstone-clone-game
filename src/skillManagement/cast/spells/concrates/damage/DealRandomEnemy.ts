import { InitialState } from "../../../../../types/Card";
import { Card } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import CastableCard from "../../abstracts/CastableCard";

export class DealRandomEnemy extends CastableCard implements Castable {
  constructor(amount: number) {
    super(amount);
  }
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    const enemyCards = state.board.enemy;
    const randomEnemyCard = enemyCards[Math.floor(Math.random() * enemyCards.length)];
    randomEnemyCard!.cardHealth -= this.amount;
  }
}