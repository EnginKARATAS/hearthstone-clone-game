import { createSlice } from "@reduxjs/toolkit";


export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameOver: false,
    gameState: "menu",
  },
  reducers: {
    setGameOver: (state, action) => {
      isGameOver();
    },
    setGameState: (state, action) => {
      state.gameState = action.payload;
    },
  },
});

export const isGameOver = () => async (dispatch, getState) => {
  const state = getState();
  if (
    state.hand.profile.player.cardHealth <= 0 ||
    state.hand.profile.enemy.cardHealth <= 0
  ) {
    console.log("game over");
    dispatch(setGameOver(true));
    return true;
  } else {
    console.log("game not over");
    dispatch(setGameOver(false));
    return false;
  }
};

export const { setGameOver, setGameState } = gameSlice.actions;

export default gameSlice.reducer;
