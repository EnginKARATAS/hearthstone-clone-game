import { Card, InitialState } from "../../../types/Card";
import { Castable } from "../../cast/abstract/Castable";
import { HealAllCards } from "../../cast/spells/concrates/heal/HealAllCards";
import { HealHero } from "../../cast/spells/concrates/heal/HealHero";
import { HealCard } from "../../cast/spells/concrates/heal/HealCard";
import { Skillable } from "../abstract/Skillable";
import { DealAllEnemyMinions } from "../../cast/spells/concrates/damage/DealAllEnemyMinions";
import { DealAll } from "../../cast/spells/concrates/damage/DealAll";
import { DealAllEnemy } from "../../cast/spells/concrates/damage/DealAllEnemy";
import { DealRandomEnemy } from "../../cast/spells/concrates/damage/DealRandomEnemy";
import { EmpowerRandomCard } from "../../cast/spells/concrates/mixed/EmpowerRandomCard";
import { HealRandomCard } from "../../cast/spells/concrates/heal/healRandomCard";
function createSkill(skillData: {
  type: string;
  amount?: number;
}): Castable | null {
  console.log(skillData);
  switch (skillData.type) {
    case "HealRandomCard":
      return new HealRandomCard(skillData.amount!);
    case "HealCard":
      return new HealCard(skillData.amount!);
    case "HealHero":
      return new HealHero(skillData.amount!);
    case "HealAllCards":
      return new HealAllCards(skillData.amount!);
    case "DealRandomEnemy":
      return new DealRandomEnemy(skillData.amount!);
    case "DealAllEnemyMinions":
      return new DealAllEnemyMinions(skillData.amount!);
    case "DealAllEnemy":
      return new DealAllEnemy(skillData.amount!);
    case "DealAll":
      return new DealAll(skillData.amount!);

    case "EmpowerRandomCard":
      return new EmpowerRandomCard(skillData.amount!);
    default:
      return null;
  }
}

export class SkillManager implements Skillable {
  castSkills(
    state: InitialState,
    card: Card,
    actionMaker: "player" | "enemy"
  ): void {
    const skills = card.cardSkills
      .map(createSkill)
      .filter((skill) => skill !== null);
    skills.forEach((skill) => {
      skill.cast(state, card, actionMaker);
    });
  }
}
