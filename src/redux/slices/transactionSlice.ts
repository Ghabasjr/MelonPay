import { createSlice } from "@reduxjs/toolkit";

interface TransactionState {
  list: any[]; // Replace 'any' with the specific type if known
}

const initialState: TransactionState = { list: [] };

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: { payload: any }) => { // Replace 'any' with the specific type if known
      state.list.push(action.payload);
    },
    clearTransactions: (state) => {
      state.list = [];
    },
  },
});

export const { addTransaction, clearTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
