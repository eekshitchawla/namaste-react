import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //cart items
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action);
      // const items = state.items;
      alert(action.payload.card.info.name + " added to Cart");
    },
    removeItem: (state, id) => {
      console.log(current(state));
      console.log(id);
      const items = state.items;
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.payload.card.info.id === id.payload.card.info.id) {
          items.splice(index, 1);
          alert(id.payload.card.info.name + " is removed from Cart");
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
