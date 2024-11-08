import { Card, InitialState } from "../../../../types/Card";
import { Castable } from "../../abstract/Castable";

export class HealHero implements Castable {
  cast(state: InitialState, card: Card): void {
    state.profile.player!.cardHealth += 3;
  }
}
