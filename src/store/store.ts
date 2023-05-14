import { configureStore } from "@reduxjs/toolkit";
import { uiReducers } from "./ui";
import { RandomRecipeReducer } from "./randomRecipe";
const store = configureStore({
  reducer: {ui: uiReducers, randomRecipe: RandomRecipeReducer}
});
export default store;