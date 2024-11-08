import { Card, InitialState } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import CastableCard from "../../abstracts/CastableCard";

export class HealAllCards extends CastableCard implements Castable {
  constructor(amount: number) {
    super(amount);
  }
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    state.board[actionMaker].forEach((boardCard) => {
      if(boardCard.cardId !== card.cardId){
        boardCard.cardHealth += this.amount;
      }
    });
  }
}
