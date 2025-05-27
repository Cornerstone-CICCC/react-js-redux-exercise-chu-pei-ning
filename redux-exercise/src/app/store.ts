import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/UserSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer
  }
})

export type AppDispatch = typeof store.dispatch