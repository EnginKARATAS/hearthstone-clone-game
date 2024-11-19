import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../store";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameOver: false,
    gameState: "characterSelection",
    resourcesLoaded: false,
    loadingProgress: 0,
  },
  reducers: {
    resetGame: (state) => {
      state.gameOver = false;
      state.gameState = "menu";
      state.resourcesLoaded = false;
      state.loadingProgress = 0;
    },
    setGameOver: (state, action) => {
      isGameOver();
    },
    setGameState: (state, action) => {
      state.gameState = action.payload;
    },
    setResourcesLoaded: (state, action) => {
      state.resourcesLoaded = action.payload;
    },
    setLoadingProgress: (state, action) => {
      state.loadingProgress = action.payload;
    },
  },
});

export const isGameOver = () => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state = getState();
  if (
    state.hand.profile.player?.cardHealth <= 0 ||
    state.hand.profile.enemy?.cardHealth <= 0
  ) {
    dispatch(setGameOver(true));
    return true;
  } else {
    dispatch(setGameOver(false));
    return false;
  }
};

export const { 
  setGameOver, 
  setGameState, 
  resetGame, 
  setResourcesLoaded, 
  setLoadingProgress 
} = gameSlice.actions;

export default gameSlice.reducer;
