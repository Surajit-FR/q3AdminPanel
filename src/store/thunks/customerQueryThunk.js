import { createAsyncThunk } from "@reduxjs/toolkit";
import { GETALLCUSTOMERQUERIES } from "../../api/Api";

export const costactUsThunk = createAsyncThunk(
    'contactus/getAllCustomerQueries',
    async (_, { rejectWithValue }) => {
        try {
            const response = await GETALLCUSTOMERQUERIES()
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