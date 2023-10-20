import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //cart items
  },
  reducers: {
    addItem: (state, action) => {
      const items = state.items;
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.payload.card.info.id === action.payload.card.info.id) {
          // todo
          element.payload.card.info.qty
            ? (element.payload.card.info.qty += 1)
            : (element.payload.card.info.qty = 1);
          return;
        }
      }
      state.items.push(action);
    },
    removeItem: (state, id) => {
      const items = state.items;
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.payload.card.info.id === id.payload.card.info.id) {
          if (element.payload.card.info.qty > 0) {
            element.payload.card.info.qty -= 1;
            break;
          }
          items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
