import { createSlice } from "@reduxjs/toolkit";
import { makePaymentThunk, transactionListThunk } from "../thunks/transactionsThunk";

const initialState = {
  transactionDetails: {},
  loading: "idle",
  error: null,
  paymentLoading:'idle',
  paymentError: null,
};

const transactionReducer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    clearItems: () => initialState,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(transactionListThunk.pending, (state, action) => {
      // Add user to the state array
      (state.loading = "idle"), (state.error = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(transactionListThunk.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      (state.transactionDetails = action.payload?.data),
        (state.loading = "success"),
        (state.error = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(transactionListThunk.rejected, (state, action) => {
      // Add user to the state array
      (state.transactionDetails = {}),
        (state.loading = "error"),
        (state.error = action.payload);
    });
     // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(makePaymentThunk.pending, (state, action) => {
      // Add user to the state array
      (state.paymentLoading = "idle"), (state.paymentError = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(makePaymentThunk.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);

        (state.paymentLoading = "success"),
        (state.paymentError = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(makePaymentThunk.rejected, (state, action) => {
      // Add user to the state array
 
        (state.paymentLoading = "error"),
        (state.paymentError = action.payload);
    });
  },
});

export default transactionReducer.reducer;
