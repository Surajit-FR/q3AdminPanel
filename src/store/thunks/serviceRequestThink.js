import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETALLSERVICEEREQUESTS, GETSINGLESERVICEREQUEST } from '../../api/Api'

export const serviceListThunk = createAsyncThunk(
    'service/serviceRequestListSlice',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETALLSERVICEEREQUESTS(data)
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });  
            }
            // console.log("response==>" ,response?.data);
            
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

export const serviceRequestDetailsThunk = createAsyncThunk(
    'service/getSingleServiceReques',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETSINGLESERVICEREQUEST(data)
            
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });  
            }
            // console.log("response", response.data);
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

export const serviceListToDownloadThunk = createAsyncThunk(
    'service/serviceRequestListToDownloadSlice',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETALLSERVICEEREQUESTS(data)
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });  
            }
            // console.log("response==>" ,response?.data);
            
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
