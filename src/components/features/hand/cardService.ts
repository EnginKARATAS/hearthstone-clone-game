import { characterPack } from "../../../assets/characterPack.ts";
import profilePack from "../../../assets/profilePack.js";

let clientCardBase: Card[] = [];

let enemyCardBase: Card[] = [];

let profile: { player: Profile | null; enemy: Profile | null } = {
  player: null,
  enemy: null,
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

export const setFirstCardBase = (characters: {
  p1Name: String;
  p2Name: String;
}) => {
  enemyCardBase = characterPack[characters.p2Name].map((card: Card) => ({
    ...card,
    cardOwner: "enemy",
  }));
  clientCardBase = characterPack[characters.p1Name].map((card: Card) => ({
    ...card,
    cardOwner: "player",
  }));
};
export const setProfileBase = (characters: {
  p1Name: string;
  p2Name: string;
}) => {
  profile.player = profilePack[characters.p1Name];
  profile.enemy = profilePack[characters.p2Name];
};
export const getProfile = () => {
  return profile;
};

export const resetCardBase = () => {
  clientCardBase = [];
  enemyCardBase = [];
};
