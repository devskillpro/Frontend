// // src/redux/slices/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: [],
//   isCartOpen: false,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existing = state.cartItems.find(
//         item => item.name === action.payload.name
//       );
//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         state.cartItems.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         item => item.name !== action.payload
//       );
//     },
//     updateQuantity: (state, action) => {
//       const { name, quantity } = action.payload;
//       const item = state.cartItems.find(item => item.name === name);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//     toggleCart: (state) => {
//       state.isCartOpen = !state.isCartOpen;
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   updateQuantity,
//   toggleCart,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(
        item => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
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
