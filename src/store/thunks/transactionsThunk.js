import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCHTRANSACTIONSPWISE, GETTRANSACTIONDATA, GIVEPAYMENTSP } from '../../api/Api'
import { showToast } from '../../utils/Toast';

export const transactionListThunk = createAsyncThunk(
    'transaction/transactionList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await GETTRANSACTIONDATA()
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
export const makePaymentThunk = createAsyncThunk(
    'transaction/makePayment',
    async (data, { rejectWithValue }) => {
        try {
            console.log({ data });

            const response = await GIVEPAYMENTSP(data)
            if (!response?.data?.success) {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }

            showToast({
                message: response?.data?.message || "Payment Successful",
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
export const fetchTransationsSpWiseThunk = createAsyncThunk(
    'transaction/fetchTransactionsSpWise',
    async (data, { rejectWithValue }) => {
        try {
            const response = await FETCHTRANSACTIONSPWISE(data)
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