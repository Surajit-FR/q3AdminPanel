import { createSlice } from '@reduxjs/toolkit'
import { costingContactThunk, costingThunk } from '../thunks/costingThunk'

const initialState = {
    costingDetails: {},
    contactnumber: {},
    loading: 'idle',
    contactLoading:"idle",
    contactError:null,
    error: null,
}

const costingReducer = createSlice({
    name: 'costing',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costingThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = 'idle',
            state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costingThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);           
            state.costingDetails = action.payload?.data,
            state.loading = 'success',
            state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costingThunk.rejected, (state, action) => {
            // Add user to the state array
            state.costingDetails = {},
            state.loading = 'error',
            state.error = action.payload
        })
        builder.addCase(costingContactThunk.pending, (state, action) => {
            // Add user to the state array
            state.contactLoading = 'idle',
            state.contactError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costingContactThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);           
            state.contactnumber = action.payload?.data,
            state.contactLoading='success',
            state.contactError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costingContactThunk.rejected, (state, action) => {
            // Add user to the state array
            state.contactnumber = {},
            state.contactLoading = 'error',
            state.contactError = action.payload
        })
    },
})


export default costingReducer.reducer;