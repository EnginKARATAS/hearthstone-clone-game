import { Card } from "../../../../types/Card";
import { Healable } from "../abstracts/Healable";

export class HealCard implements Healable {
  heal(card: Card, value: number): void {
    card.cardHealth += value;
  }
}
