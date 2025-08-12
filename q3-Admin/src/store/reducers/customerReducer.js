import { createSlice } from '@reduxjs/toolkit'
import { customerThunk } from '../thunks/customerthunk'

const initialState = {
    customerList: [],
    loading: 'idle',
    error: null,
}

const customerReducer = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(customerThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = 'idle',
            state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(customerThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);           
            state.customerList = action.payload?.data,
            state.loading = 'success',
            state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(customerThunk.rejected, (state, action) => {
            // Add user to the state array
            state.customerList = [],
            state.loading = 'error',
            state.error = action.payload
        })
    },
})


export default customerReducer.reducer;