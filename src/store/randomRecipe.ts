import { createSlice } from "@reduxjs/toolkit";
import { RandomRecipe } from "../components/MainPage/RandomRecipe/RecipeContainer";
const inialState: RandomRecipe = {
  extendedIngredients: [{ id: 0, name: "" }],
  image: "",
  readyInMinutes: 0,
  servings: 0,
  title: "",
  id: 0,

};

interface Payload {
  type: string;
  payload: RandomRecipe;
}

const RandomRecipeSlice = createSlice({
  name: "randomRecipe",
  initialState: inialState,
  reducers: {
    setRecipe(_, payload: Payload) {
      return { ...payload.payload}
    },
  },
});

export const RandomRecipeActions = RandomRecipeSlice.actions;
export const RandomRecipeReducer = RandomRecipeSlice.reducer;