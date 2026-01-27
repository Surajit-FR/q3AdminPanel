import { createSlice } from "@reduxjs/toolkit";
import { dashboardKPIDataThunk, dashboardPerformerDataThunk } from "../thunks/dashboardThunk";

const initialState = {
  dashboardKPIData: {},
  dashboardPerformerData:{},
  loading: "idle",
  error: null,
  performerLoading: "idle",
  performerError: null,

};


const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(dashboardKPIDataThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = 'idle',
            state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(dashboardKPIDataThunk.fulfilled, (state, action) => {
            // Add user to the state array
            // console.log(action.payload);           
            state.dashboardKPIData = action.payload?.data,
            state.loading = 'success',
            state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(dashboardKPIDataThunk.rejected, (state, action) => {
            // Add user to the state array
            state.dashboardKPIData = {},
            state.loading = 'error',
            state.error = action.payload
        })
         builder.addCase(dashboardPerformerDataThunk.pending, (state, action) => {
            // Add user to the state array
            state.performerLoading = 'idle',
            state.performerError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(dashboardPerformerDataThunk.fulfilled, (state, action) => {
            // Add user to the state array
            // console.log(action.payload);           
            state.dashboardPerformerData = action.payload?.data,
            state.performerLoading = 'success',
            state.performerError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(dashboardPerformerDataThunk.rejected, (state, action) => {
            // Add user to the state array
            state.dashboardPerformerData = {},
            state.performerLoading = 'error',
            state.performerError = action.payload
        })
    },
})


export default dashboardReducer.reducer;