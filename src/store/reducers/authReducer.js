import { createSlice } from '@reduxjs/toolkit'
import { deleteUserThunk, logInThunk } from '../thunks/authThunk'


const initialState = {
    user: {},
    loading: 'idle',
    error: null,
    isDeleateUserLoading:'idle',
    isDeleteUserError: null
}


// Then, handle actions in your reducers:
const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(logInThunk.pending, (state, action) => {
            // Add user to the state array
            state.loading = 'idle',
                state.error = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(logInThunk.fulfilled, (state, action) => {
            // Add user to the state array
            state.user = action.payload,
                state.loading = 'success',
                state.error = null

            localStorage.setItem("accessToken", action?.payload?.data?.user.accessToken)
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(logInThunk.rejected, (state, action) => {
            // Add user to the state array
                state.loading = 'error',
                state.error = action.payload
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(deleteUserThunk.pending, (state, action) => {
            // Add user to the state array
            state.isDeleateUserLoading = 'idle',
                state.isDeleteUserError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
                state.isDeleateUserLoading = 'success',
                state.isDeleteUserError = null
        })
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(deleteUserThunk.rejected, (state, action) => {
            // Add user to the state array
                state.isDeleateUserLoading = 'error',
                state.isDeleteUserError = action.payload
        })
    },
})


export default authReducer.reducer;