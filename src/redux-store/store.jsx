import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./features/slice/cartSlice";
import productsSliceReducer from "./features/slice/productSlice";
import { authSlice } from "./features/slice/authSlice";

const initialState ={
    signInAccess: {
      userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null },
      cart: {
          cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
      shippingAddress: localStorage.getItem('shippingAddress') 
            ? JSON.parse( localStorage.getItem('shippingAddress'))
            : {}, 
      },
}

const store = configureStore({
    reducer: {
     authenticate: authSlice.reducer, 
     cart: cartSliceReducer,
     products: productsSliceReducer,
    },
    initialState,
});


export default store;

