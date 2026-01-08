import { createAsyncThunk } from '@reduxjs/toolkit'
import { GETCOSTINGCONTACT, GETCOSTINGdETAILS, UPDATECOSTINGCONTACTDETAIL, UPDATECOSTINGDETAIL } from '../../api/Api'
import { showToast } from '../../utils/Toast';

export const costingThunk = createAsyncThunk(
    'costing/getAllCostingDetails',
    async (_, { rejectWithValue }) => {
        try {
            const response = await GETCOSTINGdETAILS()
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
export const editCostingThunk = createAsyncThunk(
    'costing/editAllCostingDetails',
    async (data, { rejectWithValue }) => {
        try {
            const response = await UPDATECOSTINGDETAIL(data.priceRuleId, data.data)
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
            // Handle network errors or other unexpected errors
            if (error instanceof Error) {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }
        }

    },
)
export const costingContactThunk = createAsyncThunk(
    'costing/getTowingcontactNumber',
    async (_, { rejectWithValue }) => {
        try {
            const response = await GETCOSTINGCONTACT()
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
export const editCostingContactThunk = createAsyncThunk(
    'costing/editAllCostingDetails',
    async (data, { rejectWithValue }) => {
        try {
            const response = await UPDATECOSTINGCONTACTDETAIL(data.priceRuleId, data.data)
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
            // Handle network errors or other unexpected errors
            if (error instanceof Error) {
                return rejectWithValue({ message: 'Network error or unexpected issue', originalError: error?.response?.data?.message });
            }
        }

    },
)