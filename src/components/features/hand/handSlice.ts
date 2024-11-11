import { createSlice } from "@reduxjs/toolkit";
import { pos, getTop } from "./cardPositioningUtils.js";
import {
  pullRandomCard,
  getCardBaseLenght,
  setFirstCardBase,
  setProfileBase,
  getProfile,
  resetCardBase,
} from "./cardService.ts";
import { resetGame } from "../game/gameSlice.js";
import { Card, InitialState } from "../../../types/Card.js";
import { SkillManager } from "../../../skillManagement/skillManager/concrate/SkillManager.ts";
const skillManager = new SkillManager();
const initialState: InitialState = {
  hand: {
    player: [],
    enemy: [],
  },
  board: {
    player: [],
    enemy: [],
  },
  cardBaseCount: {
    enemy: getCardBaseLenght({ player: "enemy" }),
    player: getCardBaseLenght({ player: "player" }),
  },
  singleCard: null,
  profile: {
    player: {
      cardHealth: 30,
      armor: 0,
      profile: "player",
      cardId: Math.random(),
      borderColor: "",
      cardOwner: "player",
      cardName: "",
      cardDescription: "",
      cardType: "",
      cardCost: 0,
      cardImageName: "",
      cardAttack: 0,
      image: "",
      isSelected: false,
      cardPack: "",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
    enemy: {
      cardHealth: 30,
      profile: "enemy",
      armor: 0,
      cardId: Math.random(),
      borderColor: "",
      cardOwner: "enemy",
      cardName: "",
      cardDescription: "",
      cardType: "",
      cardCost: 0,
      cardImageName: "",
      cardAttack: 0,
      image: "",
      isSelected: false,
      cardPack: "",
      cardPosition: { x: 0, y: 0, top: 0, size: 150, offset: 0 },
      deg: 0,
      move: 0,
      boardPairId: null,
    },
  },

  cardCache: [{ player: null, enemy: null }],
  moveCount: 0,
};

const borderColorCode: string[] = [
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "orange",
  "white",
  "black",
  "gray",
];

const isCard_CachePlayable = (state: InitialState, clickedCard: Card | any) => {
  //loking for cache of current move
  let isPlayable = true;
  state.cardCache.forEach((moveCards, index) => {
    if (
      index <= state.moveCount &&
      (moveCards.player?.cardId === clickedCard.cardId ||
        moveCards.enemy?.cardId === clickedCard.cardId)
    ) {
      isPlayable = false;
    }
  });
  return isPlayable;
};

const isPlayerPendingPair = (
  state: InitialState,
  actionMaker: "enemy" | "player"
) => {
  return state.cardCache[state.moveCount]?.[actionMaker];
};

const isActionerCacheBlank = (
  state: InitialState,
  actionMaker: "enemy" | "player"
) => {
  return state.cardCache[state.moveCount]?.[actionMaker] === null;
};

const decideDuelDestiny = (
  state: InitialState,
  cacheEnemyCard: Card,
  cachePlayerCard: Card
) => {
  let playerCard = state.board.player.find((card) => {
    if (card.cardId === cachePlayerCard.cardId) return card;
  });
  if (!playerCard)
    if (cachePlayerCard.profile === "player") playerCard = state.profile.player;

  let enemyCard = state.board.enemy.find(
    (card) => card.cardId === cacheEnemyCard.cardId
  );

  const enemyProfile = state.profile.enemy;
  const clientProfile = state.profile.enemy;
  !enemyCard && (enemyCard = enemyProfile);
  !clientProfile && (playerCard = clientProfile);

  if (cacheEnemyCard.borderColor === cachePlayerCard.borderColor) {
    //Defender(Health)-Attacker(Attack)<=0 destroy defender card
    //Attacker(Health)-Defender(Attack)<=0 destroy attacker card
    //else both loose health
    if (playerCard!.profile === "player") {
      playerCard!.cardHealth -= enemyCard!.cardAttack;
    } else {
      playerCard!.cardHealth -= enemyCard!.cardAttack;
      enemyCard!.cardHealth -= playerCard!.cardAttack;
    }

    if (playerCard!.cardHealth <= 0) {
      const cardIndex = state.board.player.findIndex(
        (card) => card.cardId === playerCard!.cardId
      );
      state.board.player.splice(cardIndex, 1);
    }
    if (enemyCard!.cardHealth <= 0) {
      const cardIndex = state.board.enemy.findIndex(
        (card) => card.cardId === enemyCard!.cardId
      );
      state.board.enemy.splice(cardIndex, 1);
    }
  }
};

const clearMove = (state: InitialState) => {
  state.moveCount = 0;
  state.cardCache = [{ player: null, enemy: null }];
  state.board.player.forEach((card) => {
    card.borderColor = "";
    card.isSelected = false;
    card.boardPairId = null;
  });
  state.board.enemy.forEach((card) => {
    card.borderColor = "";
    card.isSelected = false;
    card.boardPairId = null;
  });
  state.profile.player.borderColor = "";
  state.profile.enemy.borderColor = "";
  state.profile.player.isSelected = false;
  state.profile.enemy.isSelected = false;
  state.profile.player.boardPairId = null;
  state.profile.enemy.boardPairId = null;
};

const getBorderColor = (state: InitialState) => {
  return borderColorCode[state.moveCount];
};

const isCard_BelongsToActionMaker = (
  clickedCard: Card,
  actionMaker: "enemy" | "player"
) => {
  // if(clickedCard.profile == "enemy" || clickedCard.profile == "player")
  //   return true //ignore logic
  return clickedCard.cardOwner === actionMaker;
};

const handleClickBoardCard = (
  state: InitialState,
  clickedCard: Card | null,
  actionMaker: "enemy" | "player"
) => {
  if (isCard_CachePlayable(state, clickedCard)) {
    if (isCard_BelongsToActionMaker(clickedCard!, actionMaker)) {
      //clear cache
      if (isActionerCacheBlank(state, actionMaker)) {
        clickedCard!.borderColor = getBorderColor(state);
        clickedCard!.isSelected = true;
        state.cardCache[state.moveCount][actionMaker] = clickedCard;
      } else {
        state.cardCache[state.moveCount][actionMaker]!.borderColor = "";
        state.cardCache[state.moveCount][actionMaker]!.isSelected = false;
        const boardCard = state.board[actionMaker].find(
          (card) =>
            card.cardId ===
            state.cardCache[state.moveCount][actionMaker]?.cardId
        );
        if (boardCard) {
          boardCard.borderColor = "";
          boardCard.isSelected = false;
        }
        state.cardCache[state.moveCount].player = null;
        state.cardCache[state.moveCount].enemy = null;
        clickedCard!.borderColor = getBorderColor(state);
        clickedCard!.isSelected = true;
        state.cardCache[state.moveCount][actionMaker] = clickedCard;
      }
    } else if (
      clickedCard &&
      clickedCard.cardOwner === (actionMaker === "enemy" ? "player" : "enemy")
    ) {
      if (isPlayerPendingPair(state, actionMaker)) {
        //set pairing id
        const pairingId = clickedCard.cardId;
        state.cardCache[state.moveCount][actionMaker]!.boardPairId = pairingId;
        const actionerCard = state.board[
          actionMaker === "enemy" ? "enemy" : "player"
        ].find((card) => card.borderColor === getBorderColor(state));
        if (actionerCard) {
          actionerCard.boardPairId = pairingId;
        }
        clickedCard.borderColor = getBorderColor(state);
        clickedCard.isSelected = true;
        clickedCard.boardPairId = pairingId;
        state.cardCache[state.moveCount][
          actionMaker === "enemy" ? "player" : "enemy"
        ] = clickedCard;
        state.moveCount++;
        state.cardCache[state.moveCount] = {
          player: null,
          enemy: null,
        };
      }
    }
  }
};

export const handSlice = createSlice({
  name: "hand",
  initialState,
  reducers: {
    removeBoardCard: (state: InitialState, action: { payload: Card }) => {
      const cardIndex = state.board[action.payload.cardOwner as "player" | "enemy"].findIndex((card) => card.cardId === action.payload.cardId);
      state.board[action.payload.cardOwner as "player" | "enemy"].splice(cardIndex, 1);
    },
    makeLastCardsPlayable: (state: InitialState, action: { payload: "player" | "enemy" }) => {
      state.board[action.payload].forEach((card) => {
        card.isPlayedLastTurn = true;
      });
    },
    setProfile: (
      state: InitialState,
      action: { payload: { p1Name: string; p2Name: string } }
    ) => {
      state.profile.player = getProfile().player;
      state.profile.enemy = getProfile().enemy;
    },
    setCardBase: (
      state: InitialState,
      action: { payload: { characters: { p1Name: string; p2Name: string } } }
    ) => {
      setFirstCardBase(action.payload.characters);
      setProfileBase(action.payload.characters);
    },
    clickedProfile: (
      state: InitialState,
      action: { payload: "player" | "enemy" }
    ) => {
      if (
        isPlayerPendingPair(
          state,
          action.payload === "player" ? "enemy" : "player"
        )
      ) {
        const actionMakerOpposite =
          action.payload === "player" ? "enemy" : "player";
        state.profile[action.payload].borderColor = getBorderColor(state);
        state.profile[action.payload].isSelected = true;

        state.profile[action.payload].boardPairId =
          state.profile[action.payload].cardId;
        state.cardCache[state.moveCount][actionMakerOpposite]!.boardPairId =
          state.profile[action.payload].cardId;

        state.cardCache[state.moveCount][action.payload] =
          state.profile[action.payload];

        state.moveCount++;
        state.cardCache[state.moveCount] = {
          player: null,
          enemy: null,
        };
      }
    },

    advanceScenarioMove: (state: InitialState) => {
      state.cardCache.forEach((move) => {
        if (move.enemy && move.player) {
          if (move.enemy.boardPairId === move.player.boardPairId) {
            decideDuelDestiny(state, move.enemy, move.player);
          }
        }
      });

      clearMove(state);
    },

    clickBoardCard: (
      state: InitialState,
      action: {
        payload: { clickedCard: Card | any; actionMaker: "enemy" | "player" };
      }
    ) => {
      const actionMaker = action.payload.actionMaker;
      const cardOwner =
        action.payload.clickedCard?.cardOwner === "player" ? "player" : "enemy";
      const clickedCard = state.board[cardOwner].find(
        (card) => card.cardId === action.payload.clickedCard.cardId
      );
      if (!clickedCard) return;

      handleClickBoardCard(state, clickedCard, actionMaker);
    },
    syncCardBaseLenght: (state: InitialState) => {
      state.cardBaseCount.player = getCardBaseLenght({ player: "player" });
      state.cardBaseCount.enemy = getCardBaseLenght({ player: "enemy" });
    },
    addHealth: (
      state: InitialState,
      action: { payload: { value: number; player: "player" | "enemy" } }
    ) => {
      const profile =
        action.payload.player === "player"
          ? state.profile.player
          : state.profile.enemy;
      profile.cardHealth += action.payload.value;
      if (profile.cardHealth <= 0) {
        //TODO: game over screen
        profile.cardHealth = 0;
      }
    },
    addArmor: (
      state: InitialState,
      action: { payload: { value: number; player: "player" | "enemy" } }
    ) => {
      const profile =
        action.payload.player === "player"
          ? state.profile.player
          : state.profile.enemy;
      profile.armor += action.payload.value;
    },
    drawCard: (
      state: InitialState,
      action: { payload: { isEnemy: boolean } }
    ) => {
      const cardState = action.payload.isEnemy
        ? state.hand.enemy
        : state.hand.player;
      const randomCard = action.payload.isEnemy
        ? pullRandomCard({ isEnemy: true })
        : pullRandomCard({ isEnemy: false });

      if (cardState.length < 10 && randomCard) {
        if (action.payload.isEnemy && randomCard) {
          state.hand.enemy.push(randomCard);
          updateEnemyCardPositions(state, cardState.length);
        } else {
          state.hand.player.push(randomCard);
          updatePlayerCardPositions(state, cardState.length);
        }
      }
    },
    showCard: (
      state: InitialState,
      action: { payload: { cardId: number } }
    ) => {
      const card = state.hand.player.find(
        (card) => card.cardId === action.payload.cardId
      );
      if (card) {
        card.cardPosition.y = 300;
        card.cardPosition.x = 300;
      }
    },
    hoverSingleCard: (
      state: InitialState,
      action: { payload: Card | null }
    ) => {
      state.singleCard = action.payload;
    },
    closeSingleCard: (state: InitialState) => {
      state.singleCard = null;
    },
    addCardToBoard: (
      state: InitialState,
      action: { payload: Card; player: "player" | "enemy" }
    ) => {
      if (state.board.player.length < 7) {
        state.board.player.push(action.payload);
        const cardIndex = state.hand.player.findIndex(
          (card) => card.cardId === action.payload.cardId
        );
        state.hand.player.splice(cardIndex, 1);
        updatePlayerCardPositions(state, state.hand.player.length);
        refreshBoardCardPlayer(state, state.board.player.length);
        skillManager.castSkills(state, action.payload, "player");

      }
    },
    playCardToBoard: (
      //enemy plays
      state: InitialState,
      action: { payload: { isEnemy: boolean } }
    ) => {
      if (
        action.payload.isEnemy &&
        state.hand.enemy.length > 0 &&
        state.board.enemy.length < 7
      ) {
        const randomCardIndex = Math.floor(Math.random() * state.hand.enemy.length);
        state.board.enemy.push(state.hand.enemy[randomCardIndex]);
        state.hand.enemy.splice(randomCardIndex, 1);
        const lastPushIndex = state.board.enemy.length - 1;
        skillManager.castSkills(state, state.board.enemy[lastPushIndex], "enemy");
        updateEnemyCardPositions(state, state.hand.enemy.length);
      }
      refreshBoardCardEnemy(state, state.board.enemy.length);
    },
    closeCard: (state: InitialState, action: { payload: Card | null }) => {
      state.singleCard = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetGame, (state) => { 
      resetCardBase();
      state.hand = {
        player: [],
        enemy: []
      };
      state.board = {
        player: [],
        enemy: []
      };
      state.cardBaseCount = {
        enemy: getCardBaseLenght({ player: "enemy" }),
        player: getCardBaseLenght({ player: "player" })
      };
      state.singleCard = null;
      state.cardCache = [{ player: null, enemy: null }];
      state.moveCount = 0;
      
      // Reset profiles to initial state
      if (state.profile.player) {
        state.profile.player.cardHealth = 30;
        state.profile.player.armor = 0;
        state.profile.player.borderColor = "";
        state.profile.player.isSelected = false;
        state.profile.player.boardPairId = null;
      }
      
      if (state.profile.enemy) {
        state.profile.enemy.cardHealth = 30;
        state.profile.enemy.armor = 0;
        state.profile.enemy.borderColor = "";
        state.profile.enemy.isSelected = false;
        state.profile.enemy.boardPairId = null;
      }
    });
  },
});

const refreshBoardCardEnemy = (state: InitialState, cardsLength: number) => {
  state.board.enemy = state.board.enemy.map((card, i) => {
    return {
      ...card,
      cardPosition: {
        x: -cardsLength * 49,
        y: 0,
        offset: 555,
        size: 150,
        top: getTop(cardsLength),
      },
    };
  });
};

const refreshBoardCardPlayer = (state: InitialState, cardsLength: number) => {
  state.board.player = state.board.player.map((card, i) => {
    return {
      ...card,
      cardPosition: {
        x: cardsLength * 49,
        y: 0,
        offset: 555,
        size: 150,
        top: getTop(cardsLength),
      },
    };
  });
};

const updateEnemyCardPositions = (state: InitialState, cardsLength: number) => {
  state.hand.enemy = state.hand.enemy.map((card, i) => {
    const degCel = 8;
    return {
      ...card,
      cardPosition: {
        x: pos(cardsLength, i),
        y: 0,
        offset: 0,
        top: getTop(cardsLength),
        size: 150,
      },
      deg: (-cardsLength * degCel) / 2 + i * degCel,
    };
  });
};
const updatePlayerCardPositions = (
  state: InitialState,
  cardsLength: number
) => {
  state.hand.player = state.hand.player.map((card, i) => {
    const degCel = 8;
    return {
      ...card,
      cardPosition: {
        x: pos(cardsLength, i),
        y: 0,
        offset: 0,
        top: getTop(cardsLength),
        size: 150,
      },
      deg: (-cardsLength * degCel) / 2 + i * degCel,
    };
  });
};

export const {
  drawCard,
  showCard,
  hoverSingleCard,
  addCardToBoard,
  playCardToBoard,
  closeCard,
  addHealth,
  addArmor,
  syncCardBaseLenght,
  closeSingleCard,
  clickBoardCard,
  advanceScenarioMove,
  clickedProfile,
  setCardBase,
  setProfile,
  makeLastCardsPlayable,
  removeBoardCard
} = handSlice.actions;
export default handSlice.reducer;
