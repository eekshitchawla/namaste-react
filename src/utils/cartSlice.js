import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //cart items
  },
  reducers: {
    // addItem: (state, action) => {
    //   // console.log(action);
    //   // const tempAction = {
    //   //   card: {
    //   //     ...action.payload.card,
    //   //     qty: 1,
    //   //   },
    //   // };
    //   // console.log(tempAction);
    //   // // state.items = [...state.items, tempAction];
    //   // state.items.push(tempAction);
    //   // console.log(current(state.items));
    //   // // alert(action.payload.card.info.name + " added to Cart");
    //   // action.push({ qty: 1 });
    //   state.items.push(action);
    //   state.items[state.items.length - 1] = {
    //     ...state.items[state.items.length - 1],
    //     qty: 1,
    //   };
    // },
    addItem: (state, action) => {
      state.items.push(action);
    },
    removeItem: (state, id) => {
      console.log(current(state));
      console.log(id);
      const items = state.items;
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.payload.card.info.id === id.payload.card.info.id) {
          items.splice(index, 1);
          // alert(id.payload.card.info.name + " is removed from Cart");
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
