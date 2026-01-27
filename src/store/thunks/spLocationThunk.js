import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETSPLOCATIONDATA } from '../../api/Api';


export const getSpLocationThunk = createAsyncThunk(
    'service/spLocation',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETSPLOCATIONDATA(data)
            // console.log({response});
            if (response?.data?.status !== "success") {
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