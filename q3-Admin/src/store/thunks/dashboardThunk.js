import { createAsyncThunk } from "@reduxjs/toolkit";
import { GETDASHBOARDKPIDATA } from "../../api/Api";

export const dashboardKPIDataThunk = createAsyncThunk(
  "dashboard/getKPIData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GETDASHBOARDKPIDATA();
      if (!response?.data?.status === "success") {
        return rejectWithValue({
          message: "Network error or unexpected issue",
          originalError: error?.response?.data?.message,
        });
      }
    //   console.log("dbKPIData",response.data);      
      return response.data;
    } catch (error) {
      // Handle network errors or other unexpected errors
      if (error instanceof Error) {
        return rejectWithValue({
          message: "Network error or unexpected issue",
          originalError: error?.response?.data?.message,
        });
      }
    }
  }
);
