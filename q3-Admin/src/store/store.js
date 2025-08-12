import { configureStore } from '@reduxjs/toolkit' 
import authreducer from './reducers/authReducer.js'
import customerReducer from './reducers/customerReducer.js'
import serviceProviderReducer from './reducers/serviceproviderreducer.js'

export const store = configureStore({
    reducer: {
    auth: authreducer,
    customer: customerReducer,
    serviceProvider: serviceProviderReducer
    },
  })