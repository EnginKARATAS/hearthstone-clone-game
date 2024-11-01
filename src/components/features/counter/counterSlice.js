import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    player: 0,
    enemy: 0,
  },
  inGameMana: {
    player: 0,
    enemy: 0,
  },
  isClientTurn: false,
  successStatus: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    resetInGameMana: (state, action) => {
      state.inGameMana[action.payload.player] = state.value[action.payload.player];
    },
    openYourTurn: (state) => {
      state.isClientTurn = true;
    },
    closeYourTurn: (state, action) => {
      state.isClientTurn = false;
      state.successStatus = action.payload;
    },
    increment: (state, action) => {
      if (state.value[action.payload.player] < 10) {
        state.value[action.payload.player] += 1;
      }
    },
    setSuccessStatus: (state, action) => {
      state.successStatus = action.payload;
    },
    decrement: (state, action) => {
      console.log("yess")
      state.inGameMana[action.payload.player] -= action.payload.cardCost;
    },
  },
});

 export const isCardPlayable = (card) => async (dispatch, getState) => {
  const state = getState();
  if (state.counter.value[card.cardOwner] > 0 && state.counter.value[card.cardOwner] >= card.cardCost) {
    dispatch(setSuccessStatus(true));
    return true;
  } else {
    dispatch(setSuccessStatus(false));
    return false;
  }
};

export const { increment, openYourTurn, closeYourTurn, setSuccessStatus, decrement, resetInGameMana } =
  counterSlice.actions;

export default counterSlice.reducer;
