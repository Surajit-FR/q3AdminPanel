import { createSlice } from '@reduxjs/toolkit'
import { customerBanUnbanThunk, customerThunk, getAllcustomerCsvThunk } from '../thunks/customerthunk'
import { costactUsThunk } from '../thunks/customerQueryThunk'

const initialState = {
    contactUsList: [],
    loading: 'idle',
    error: null,
}

const contactusReducer = createSlice({
    name: 'contactUs',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
        clearItems: () => initialState,

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costactUsThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = 'idle',
                state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costactUsThunk.fulfilled, (state, action) => {
            // Add user to the state array
            // console.log(action.payload);
            state.contactUsList = action.payload?.data,
                state.loading = 'success',
                state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(costactUsThunk.rejected, (state, action) => {
            // Add user to the state array
            state.contactUsList = [],
                state.loading = 'error',
                state.error = action.payload
        })
      
      
    },
})

export const { clearItems } = contactusReducer.actions;
export default contactusReducer.reducer;