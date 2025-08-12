import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLSERVICEPROVIDERS, GETSINGLESERVICEPROVIDER } from '../../api/Api'

export const serviceProviderListThunk = createAsyncThunk(
    'serviceProvider/getAllCustomers',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETALLSERVICEPROVIDERS(data)
            if (!response?.data?.status === 'success') {
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
export const serviceProviderDetailsThunk = createAsyncThunk(
    'serviceProvider/getSingleServiceProvider',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETSINGLESERVICEPROVIDER(data)
            
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });  
            }
            console.log("response", response.data);
            return response.data?.data
        }
        catch (error) {
            // Handle network errors or other unexpected errors
            if (error instanceof Error) {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }
        }

    },
)