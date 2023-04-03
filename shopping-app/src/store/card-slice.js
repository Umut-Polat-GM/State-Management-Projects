import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCard: false,
    changed:false,
  },
  reducers: {
    replaceData(state, action){
      state.totalQuantity = action.payload.totalPrice;
      state.itemsList = action.payload.itemsList
    },
    addToCard(state, action) {
      state.changed = true
      const newItem = action.payload;
      //to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.price += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeFromCard(state, action) {
      state.changed = true
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCard(state) {
      state.showCard = !state.showCard;
    },
  },
});


export const cardActions = cardSlice.actions;

export default cardSlice;
