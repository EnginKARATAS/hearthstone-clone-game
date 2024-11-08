import { Card, InitialState } from "../../../types/Card";
import { Castable } from "../../cast/abstract/Castable";
import { HealHero } from "../../cast/heal/concrates/HealHero";
import { Skillable } from "../abstract/Skillable";

function createSkill(skillData: { type: string }): Castable | null {
  switch (skillData.type) {
    case "HealHero":
      return new HealHero();
    default:
      return null;
  }
}

export class SkillManager implements Skillable {
  castSkills(state: InitialState, card: Card): void {
    debugger;
    const skills = card.cardSkills
      .map(createSkill)
      .filter((skill) => skill !== null);
    skills.forEach((skill) => {
      skill.cast(state, card);
    });
  }
}
