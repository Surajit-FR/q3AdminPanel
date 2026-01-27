import { createSlice } from '@reduxjs/toolkit'
import { serviceListThunk, serviceListToDownloadThunk, serviceRequestDetailsThunk } from '../thunks/serviceRequestThink'
import { getSpLocationThunk } from '../thunks/spLocationThunk'

const initialState = {
    serviceRequestList: [],
    serviceRequestDetails: {},
    loading: 'idle',
    error: null,
    allServiceRequestsToDownload: [],
    getAllServiceLoading: 'idle',
    getAllServiceError: null,
    spCurrentLocation:[],
    spLocationLoading: 'idle',
    spLocationError: null
}

const serviceRequestListSlice = createSlice({
    name: 'serviceRequest',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
            clearItems: () => initialState,
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
            // console.log(action.payload);
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
        builder.addCase(serviceListToDownloadThunk.pending, (state, action) => {
            // Add user to the state array
            state.getAllServiceLoading = 'idle',
                state.getAllServiceError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceListToDownloadThunk.fulfilled, (state, action) => {
            // Add user to the state array
            // console.log(action.payload);
            state.allServiceRequestsToDownload = action.payload,
                state.getAllServiceLoading = 'success',
                state.getAllServiceError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(serviceListToDownloadThunk.rejected, (state, action) => {
            // Add user to the state array
            state.allServiceRequestsToDownload = [],
                state.getAllServiceLoading = 'error',
                state.getAllServiceError = action.payload
        })
           builder.addCase(getSpLocationThunk.pending, (state, action) => {
            // Add user to the state array
            state.spLocationLoading = 'idle',
                state.spLocationError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getSpLocationThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);
            state.spCurrentLocation = action.payload?.data,
                state.spLocationLoading = 'success',
                state.spLocationError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getSpLocationThunk.rejected, (state, action) => {
            // Add user to the state array
            state.allServiceRequestsToDownload = [],
                state.spLocationLoading = 'error',
                state.spLocationError = action.payload
        })
    },
})

export const { clearItems } = serviceRequestListSlice.actions;
export default serviceRequestListSlice.reducer;