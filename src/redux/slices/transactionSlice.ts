import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: { list: [] },
  reducers: {
    addTransaction: (state, action) => {
      state.list.push(action.payload);
    },
    clearTransactions: (state) => {
      state.list = [];
    },
  },
});

export const { addTransaction, clearTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
