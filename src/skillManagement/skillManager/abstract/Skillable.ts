import { Card } from "../../../types/Card";
import { Castable } from "../../cast/abstract/Castable";
import { InitialState } from "../../../types/Card";

export interface Skillable {
  castSkills(state: InitialState, card: Card, actionMaker: "player" | "enemy"): void;
}
