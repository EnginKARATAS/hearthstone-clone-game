import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isClientTurn: false,
  successStatus: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openYourTurn: (state) => {
      state.isClientTurn = true;
    },
    closeYourTurn: (state, action) => {
      state.isClientTurn = false;
      state.successStatus = action.payload;
    },
    increment: (state) => {
      if (state.value < 10) {
        state.value += 1;
        state.isClientTurn = true;
      }
    },
    setSuccessStatus: (state, action) => {
      state.successStatus = action.payload;
    },
    decrement: (state, action) => {
      if (state.successStatus) {
        state.value -= action.payload.cardCost;
      }
    },
  },
});

 export const isCardPlayable = (card) => async (dispatch, getState) => {
  const state = getState();
  if (state.counter.value > 0 && state.counter.value >= card.cardCost) {
    dispatch(setSuccessStatus(true));
    return true;
  } else {
    dispatch(setSuccessStatus(false));
    return false;
  }
};

export const { increment, openYourTurn, closeYourTurn, setSuccessStatus, decrement } =
  counterSlice.actions;

export default counterSlice.reducer;
