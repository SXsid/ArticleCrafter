import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../src/Features/authSlice";
import  { articleSlice } from "../src/Features/articleSlice";

export const store = configureStore({
    reducer:{
        auth:AuthReducer,
        [articleSlice.reducerPath]:articleSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(articleSlice.middleware)
    }
})