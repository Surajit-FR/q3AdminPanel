import { createAsyncThunk } from '@reduxjs/toolkit'
import { BANUNBANCUSTOMER, GETALLCUSTOMERS } from '../../api/Api'
import { showToast } from '../../utils/Toast';

export const customerThunk = createAsyncThunk(
    'user/getAllCustomers',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETALLCUSTOMERS(data)
            if (!response?.data?.status === 'success') {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }
            console.log("response==>", response?.data);

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

export const customerBanUnbanThunk = createAsyncThunk(
    'user/banUnbanCustomer',
    async (data, { rejectWithValue }) => {
        try {
            const response = await BANUNBANCUSTOMER(data)
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

export const getAllcustomerCsvThunk = createAsyncThunk(
    'user/getAllCustomersToDownload',
    async (data, { rejectWithValue }) => {
        try {
            const response = await GETALLCUSTOMERS(data)
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