import { InitialState } from "../../../../../types/Card";

import { Card } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import { Skillable } from "../../../../skillManager/abstract/Skillable";
import CastableCard from "../../abstracts/CastableCard";
export class EmpowerRandomCard extends CastableCard implements Castable {
  constructor(amount: number) {
    super(amount);
  }
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    //find random card but not clicked card and give it +2 attack and +2 health
    const randomCard = state.board[actionMaker].find((c) => c.cardId !== card.cardId);
    if (randomCard) {
      randomCard.cardAttack += this.amount;
      randomCard.cardHealth += this.amount;
    }
  }
}
