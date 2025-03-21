import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import transactionReducers from "../slices/transactionSlice"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducers,
  },
});

export default store;

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
