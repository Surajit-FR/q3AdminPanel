import { createSlice } from '@reduxjs/toolkit'
import { serviceListThunk, serviceRequestDetailsThunk } from '../thunks/serviceRequestThink'

const initialState = {
    serviceRequestList: [],
    serviceRequestDetails: {},
    loading: 'idle',
    error: null,
}

const serviceRequestListSlice = createSlice({
    name: 'serviceRequest',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceListThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = 'idle',
                state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceListThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);
            state.serviceRequestList = action.payload?.data,
                state.loading = 'success',
                state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceListThunk.rejected, (state, action) => {
            // Add user to the state array
            state.serviceRequestList = [],
                state.loading = 'error',
                state.error = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceRequestDetailsThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = 'idle',
                state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceRequestDetailsThunk.fulfilled, (state, action) => {
            // Add user to the state array        
            console.log(action.payload);
            state.serviceRequestDetails = action.payload,
                state.loading = 'success',
                state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceRequestDetailsThunk.rejected, (state, action) => {
            // Add user to the state array
            state.serviceRequestDetails = {},
                state.loading = 'error',
                state.error = action.payload
        })
    },
})


export default serviceRequestListSlice.reducer;