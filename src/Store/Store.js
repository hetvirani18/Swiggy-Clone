import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import menuReducer from "./MenuSlice";
import resturantReducer from "./ResturantSlice";

export const store = configureStore({
    reducer: {
        cartSlice: cartReducer,
        menuSlice: menuReducer,
        resturantSlice: resturantReducer
    }
})