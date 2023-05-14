import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  showHamburgerNav: false,
  showOptions: true,
  showOptionDetails: false,
  details: {optionTitle: '', detail: {}},
};

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    changeLang(state) {
      state.language === "en" ? (state.language = "pl") : (state.language = "en");
    },
    toggleNav(state) {
      state.showHamburgerNav === false
        ? (state.showHamburgerNav = true)
        : (state.showHamburgerNav = false);
    },
    hideHamburger(state) {
      state.showHamburgerNav = false;
    },
    toggleNavOptions(state) {
      state.showOptions === false
        ? (state.showOptions = true)
        : (state.showOptions = false);
    },
    toggleNavOptionDetails(state) {
      state.showOptionDetails === false
        ? (state.showOptionDetails = true)
        : (state.showOptionDetails = false);
    },
    showDetails(state, payload) {
      state.details = payload.payload
    }
  },
});
export const uiReducers = uiSlice.reducer;
export const uiActions = uiSlice.actions;
