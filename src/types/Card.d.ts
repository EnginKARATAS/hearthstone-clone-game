interface InitialState {
  hand: {
    player: Card[];
    enemy: Card[];
  };
  board: {
    player: Card[];
    enemy: Card[];
  };
  cardBaseCount: {
    enemy: number;
    player: number;
  };
  singleCard: Card | null;
  profile: {
    player: Profile | null;
    enemy: Profile | null;
  };
  cardCache: [{ player: Card | null; enemy: Card | null }];
  moveCount: number;
}

export interface Card {
  cardId: number;
  cardSkills: Skill[];
  isPlayedLastTurn: boolean;
  profile: null | string;
  borderColor: string | null;
  cardOwner: "player" | "enemy" | "";
  cardName: string;
  image: string;
  cardDescription: string;
  cardType: string;
  cardCost: number;
  cardImageName: string;
  isSelected: boolean;
  cardAttack: number;
  cardHealth: number;
  cardPack: string;
 
  deg: number;
  move: number;
  boardPairId: number | null;
}

interface Profile extends Card {
  armor: number;
}

interface EnemyCard extends Card {}

interface PlayerCard extends Card {}
