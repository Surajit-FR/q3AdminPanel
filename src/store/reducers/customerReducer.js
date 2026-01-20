import { createSlice } from '@reduxjs/toolkit'
import { customerBanUnbanThunk, customerThunk, getAllcustomerCsvThunk } from '../thunks/customerthunk'

const initialState = {
    customerList: [],
    loading: 'idle',
    error: null,
    banLoading: 'idle',
    banError:null,
    allCustomersToDownload: [],
    getAllCustLoading: 'idle',
    getAllCustError: null,
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
         builder.addCase(customerBanUnbanThunk.pending, (state, action) => {
            // Add user to the state array
            state.banLoading = 'idle',
            state.banError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(customerBanUnbanThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);           
            state.banLoading = 'success',
            state.banError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(customerBanUnbanThunk.rejected, (state, action) => {
            // Add user to the state array
            state.banLoading = 'error',
            state.banError = action.payload
        })
         builder.addCase(getAllcustomerCsvThunk.pending, (state, action) => {
            // Add user to the state array
            state.getAllCustLoading = 'idle',
            state.getAllCustError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllcustomerCsvThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action.payload);   
            state.allCustomersToDownload =  action.payload       
            state.getAllCustLoading = 'success',
            state.getAllCustError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllcustomerCsvThunk.rejected, (state, action) => {
            // Add user to the state array
            state.getAllCustLoading = 'error',
            state.getAllCustError = action.payload
        })
    },
})


export default customerReducer.reducer;