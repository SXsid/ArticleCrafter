import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../src/Features/authSlice";
export const store = configureStore({
    reducer:{
        AuthReducer,
    }
})