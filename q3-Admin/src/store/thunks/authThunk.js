import { createAsyncThunk } from '@reduxjs/toolkit'
import { LOGIN } from '../../api/Api'

export const logInThunk = createAsyncThunk(
    'auth/login',
    async (logInData, { rejectWithValue }) => {
        try {
            const response = await LOGIN(logInData.data)
            if (!response?.data?.success) {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });  
            }
            return response.data
        }
        catch (error) {
            // Handle network errors or other unexpected errors
            if (error instanceof Error) {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }
        }

    },
)