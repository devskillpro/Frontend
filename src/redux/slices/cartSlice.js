import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += action.payload.quantity; // use payload quantity
      } else {
        state.cartItems.push({ ...action.payload }); // use payload quantity
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
