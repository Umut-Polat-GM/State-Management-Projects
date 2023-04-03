import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cardSlice from "./card-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    card: cardSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
