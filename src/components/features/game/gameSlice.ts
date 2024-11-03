import { createSlice } from "@reduxjs/toolkit";


export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameOver: false,
    gameState: "menu",
  },
  reducers: {
    resetGame: (state) => {
      state.gameOver = true;//useless
      //TODO: reset game
      //handSlice listening to this will reset the game
      state.gameState = "menu";
    },
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
    dispatch(setGameOver(true));
    return true;
  } else {
    dispatch(setGameOver(false));
    return false;
  }
};

export const { setGameOver, setGameState, resetGame } = gameSlice.actions;

export default gameSlice.reducer;
