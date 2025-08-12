import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLCUSTOMERS } from '../../api/Api'

export const customerThunk = createAsyncThunk(
    'user/getAllCustomers',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETALLCUSTOMERS(data)
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });  
            }
            console.log("response==>" ,response?.data);
            
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