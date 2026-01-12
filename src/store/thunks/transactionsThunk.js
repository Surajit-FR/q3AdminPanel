import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETTRANSACTIONDATA } from '../../api/Api'

export const transactionListThunk = createAsyncThunk(
    'transaction/transactionList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await GETTRANSACTIONDATA()
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });  
            }
            console.log("transactionresponse==>" ,response?.data);
            
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
