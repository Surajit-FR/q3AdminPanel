import { configureStore } from '@reduxjs/toolkit' 
import authreducer from './reducers/authReducer.js'
import customerReducer from './reducers/customerReducer.js'
import serviceProviderReducer from './reducers/serviceproviderreducer.js'
import serviceRequestListSlice from './reducers/serviceReducer'
import costingReducer from './reducers/costingReducer.js'
import dashboardReducer from './reducers/dashboardReducer.js'
import transactionReducer from './reducers/transactionReducer.js'
import contactUsReducer from './reducers/contactUsReducer.js'

export const store = configureStore({
    reducer: {
    auth: authreducer,
    customer: customerReducer,
    serviceProvider: serviceProviderReducer,
    serviceRequest: serviceRequestListSlice,
    costings: costingReducer,
    dashboard:dashboardReducer,
    transaction:transactionReducer,
    contactUs: contactUsReducer
    },
  })