import { Card, InitialState } from "../../../types/Card";

export interface Castable {
  cast(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void;
}
