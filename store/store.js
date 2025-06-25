const { configureStore, createSlice } = require("@reduxjs/toolkit");

const cartSliceObj = {
  name: "cartData",
  initialState: {
    cartData: [],
    totalAmount: 0,
    discountedPercentage: 0,
  },
  reducers: {
    addToCart(state, { payload }) {
      const existingItem = state.cartData.find(
        (item) => item.id === payload.id
      );
      if (!existingItem) {
        state.cartData.push({ ...payload });
        state.totalAmount += parseInt(payload.priceSumTotal);
        state.discountedPercentage += payload.discountPercentage
          ? payload.discountPercentage
          : 0;
      } else {
        existingItem.priceSumTotal += payload.price;
        existingItem.quantity += 1;
        state.totalAmount += parseInt(payload.price);
        state.discountedPercentage += payload.discountPercentage
          ? payload.didiscountPercentage
          : 0;
      }
    },
    removeSingleCartItem(state, { payload }) {
      const existingItem = state.cartData.find(
        (item) => item.id === payload.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartData = state.cartData.filter(
            (item) => item.id !== payload.id
          );
          state.totalAmount -= existingItem.price;
          state.discountedPercentage -= payload.discountPercentage
            ? payload.discountPercentage
            : 0;
        } else {
          existingItem.quantity -= 1;
          state.totalAmount -= existingItem.price;
          existingItem.priceSumTotal -= existingItem.price;
          state.discountedPercentage -= payload.didiscountPercentage
            ? payload.didiscountPercentage
            : 0;
        }
      }
    },
    deleteItemFromCart(state, { payload }) {
      const { cartData } = state;
      const existingItem = cartData.find((item) => item.id === payload.id);
      const filteredCart = cartData.filter((item) => item.id !== payload.id);
      state.totalAmount -= existingItem.priceSumTotal;
      state.cartData = filteredCart;
    },
  },
};

const cartSlice = createSlice(cartSliceObj);

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: cartSlice.reducer });

export default store;
