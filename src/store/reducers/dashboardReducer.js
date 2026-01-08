import { createSlice } from "@reduxjs/toolkit";
import { dashboardKPIDataThunk } from "../thunks/dashboardThunk";

const initialState = {
  dashboardKPIData: {},
  loading: "idle",
  error: null,
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
            console.log(action.payload);           
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
    },
})


export default dashboardReducer.reducer;