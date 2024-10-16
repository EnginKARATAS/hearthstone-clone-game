import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameOver: false,
  },
  reducers: {
    setGameOver: (state, action) => {
      isGameOver();
    },
  },
});

export const isGameOver = () => async (dispatch, getState) => {
  const state = getState();
  if (
    state.hand.profile.player.health <= 0 ||
    state.hand.profile.enemy.health <= 0
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

export const { setGameOver } = gameSlice.actions;

export default gameSlice.reducer;
