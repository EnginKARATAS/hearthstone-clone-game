import { Card, InitialState } from "../../../../../types/Card";
import { Castable } from "../../../abstract/Castable";
import CastableCard from "../../abstracts/CastableCard";

export class GainHealthAmountOfCardsInYourHand implements Castable {
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void {
    const clickedCard = state.board[actionMaker].find((boardCard) => boardCard.cardId === card.boardPairId);
    if(clickedCard){
      clickedCard.cardHealth += state.hand[actionMaker].length;
    }
  }
}
