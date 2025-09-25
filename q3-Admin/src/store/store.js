import { configureStore } from '@reduxjs/toolkit' 
import authreducer from './reducers/authReducer.js'
import customerReducer from './reducers/customerReducer.js'
import serviceProviderReducer from './reducers/serviceproviderreducer.js'
import serviceRequestListSlice from './reducers/serviceReducer'

export const store = configureStore({
    reducer: {
    auth: authreducer,
    customer: customerReducer,
    serviceProvider: serviceProviderReducer,
    serviceRequest: serviceRequestListSlice
    },
  })