import { characterPack } from "../../../assets/characterPack.js";

let clientCardBase: Card[] = [
  

];

let enemyCardBase: Card[] = [
 
];

export const setFirstCardBase = (characters: { p1Name: String, p2Name: String }) => {
  enemyCardBase = characterPack[characters.p2Name];
  clientCardBase = characterPack[characters.p1Name];
};

export const getCardBaseLenght = ({
  player,
}: {
  player: "player" | "enemy";
}): number => {
  return player === "player" ? clientCardBase.length : enemyCardBase.length;
};

export const pullRandomCard = ({ isEnemy }: { isEnemy: boolean }) => {
  let randomIndex;
  let randomCard: any = null;
  if (isEnemy) {
    randomIndex = Math.floor(Math.random() * enemyCardBase.length);
    randomCard = enemyCardBase[randomIndex];
    enemyCardBase.splice(randomIndex, 1);
  } else {
    randomIndex = Math.floor(Math.random() * clientCardBase.length);
    randomCard = clientCardBase[randomIndex];
    clientCardBase.splice(randomIndex, 1);
  }

  return randomCard ? randomCard : null;
};
