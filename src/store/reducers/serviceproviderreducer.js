import { createSlice } from "@reduxjs/toolkit";
import {
  getAllServiceProviderCsvThunk,
  serviceProviderBanUnbanThunk,
  serviceProviderDetailsThunk,
  serviceProviderListThunk,
  updateServiceProviderStatusThunk,
} from "../thunks/serviceProviderThunk";

const initialState = {
  serviceProviderList: [],
  serviceProviderDetails: {},
  spStatusLoading: "idle",
  spStatusError: null,
  loading: "idle",
  error: null,
  banLoading: 'idle',
  banError: null,
  allServiceProvidersToDownload: [],
  getAllSpLoading: 'idle',
  getAllSpError: null,
};

const serviceProviderReducer = createSlice({
  name: "serviceProvider",
  initialState,
  reducers: {
    clearItems: () => initialState,
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderListThunk.pending, (state, action) => {
      // Add user to the state array
      (state.loading = "idle"), (state.error = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderListThunk.fulfilled, (state, action) => {
      // Add user to the state array
      (state.serviceProviderList = action.payload?.data),
        (state.loading = "success"),
        (state.error = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderListThunk.rejected, (state, action) => {
      // Add user to the state array
      (state.serviceProviderList = []),
        (state.loading = "error"),
        (state.error = action.payload);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderDetailsThunk.pending, (state, action) => {
      // Add user to the state array
      (state.loading = "idle"), (state.error = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderDetailsThunk.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      (state.serviceProviderDetails = action.payload),
        (state.loading = "success"),
        (state.error = null);
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderDetailsThunk.rejected, (state, action) => {
      // Add user to the state array
      (state.serviceProviderDetails = {}),
        (state.loading = "error"),
        (state.error = action.payload);
    });

    builder.addCase(
      updateServiceProviderStatusThunk.pending,
      (state, action) => {
        // Add user to the state array
        (state.spStatusLoading = "idle"), (state.spStatusError = null);
      }
    );
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      updateServiceProviderStatusThunk.fulfilled,
      (state, action) => {
        // Add user to the state array
        (state.spStatusLoading = "success"),
          (state.spStatusError = null);
      }
    );
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      updateServiceProviderStatusThunk.rejected,
      (state, action) => {
        // Add user to the state array
        (state.spStatusLoading = "error"),
          (state.spStatusError = action.payload);
      }
    );
    builder.addCase(serviceProviderBanUnbanThunk.pending, (state, action) => {
      // Add user to the state array
      state.banLoading = 'idle',
        state.banError = null
    })
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderBanUnbanThunk.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      state.banLoading = 'success',
        state.banError = null
    })
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(serviceProviderBanUnbanThunk.rejected, (state, action) => {
      // Add user to the state array
      state.banLoading = 'error',
        state.banError = action.payload
    })
    builder.addCase(getAllServiceProviderCsvThunk.pending, (state, action) => {
      // Add user to the state array
      state.getAllSpLoading = 'idle',
        state.getAllSpError = null
    })
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllServiceProviderCsvThunk.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      state.allServiceProvidersToDownload = action.payload
      state.getAllSpLoading = 'success',
        state.getAllSpError = null
    })
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllServiceProviderCsvThunk.rejected, (state, action) => {
      // Add user to the state array
      state.getAllSpLoading = 'error',
        state.getAllSpError = action.payload
    })
  },
});
export const { clearItems } = serviceProviderReducer.actions;
export default serviceProviderReducer.reducer;
