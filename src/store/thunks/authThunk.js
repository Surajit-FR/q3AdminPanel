import { createAsyncThunk } from '@reduxjs/toolkit'
import { DELETEUSER, LOGIN } from '../../api/Api'
import { showToast } from '../../utils/Toast';

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
export const deleteUserThunk = createAsyncThunk(
    'auth/removeUser',
    async (data, { rejectWithValue }) => {
        try {
            console.log("reached here");

            const response = await DELETEUSER(data)
            if (!response?.data?.success) {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }
            showToast({
                message: response?.data?.message || "User removed successfully",
                type: "success",
                durationTime: 3500,
                position: "top-center",
            });
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