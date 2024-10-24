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
    player: Profile;
    enemy: Profile;
  };
  cardCache: [{player: Card | null, enemy: Card | null}];
  moveCount: number
}

interface Card {
  cardId: number;
  profile: null |string;
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
  cardPosition: {
    x: number;
    y: number;
    top: number;
    size: number;
    offset: number;
  };
  deg: number;
  move: number;
  boardPairId: number|null;
}

interface Profile extends Card{
  health: number;
  armor: number;
}

interface EnemyCard extends Card {}

interface PlayerCard extends Card {}
