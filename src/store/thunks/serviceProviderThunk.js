import { createAsyncThunk } from '@reduxjs/toolkit'
import { BANUNBANSERVICEPROVIDER, GETALLSERVICEPROVIDERS, GETSINGLESERVICEPROVIDER, VERIFYSERVICEPROVIDERSTATUS } from '../../api/Api'

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

export const updateServiceProviderStatusThunk = createAsyncThunk(
    'serviceProvider/updateServiceProviderStatus',
    async (data, { rejectWithValue }) => {
        try {
            // const {serviceProviderId,data} = data
            const response = await VERIFYSERVICEPROVIDERSTATUS(data.serviceProviderId,data.data)
            
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

export const serviceProviderBanUnbanThunk = createAsyncThunk(
    'user/banUnbanServiceProvider',
    async (data, { rejectWithValue }) => {
        try {
            const response = await BANUNBANSERVICEPROVIDER(data)
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }
            showToast({
                message: response?.data?.message || "Updated Successfully.",
                type: "success",
                durationTime: 3500,
                position: "top-center",
            });
            return response.data
        }
        catch (error) {
            if (error instanceof Error) {
                console.log({error});
                
                showToast({
                    message: error?.response?.data?.data || "Can not perform this action at this state",
                    type: "error",
                    durationTime: 3500,
                    position: "top-center",
                });
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.data });
            }
        }

    },
)

export const getAllServiceProviderCsvThunk = createAsyncThunk(
    'serviceProvider/getAllCustomersToDownload',
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