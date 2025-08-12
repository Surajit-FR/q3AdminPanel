import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Customerlist from '../pages/customerlist';
import Towingrequestlist from '../pages/towing-request-list/indx';
import Transactionhistorypages from '../pages/tansaction-history';
import Serviceproviderlist from '../pages/service-provider-list';
import ServiceProviderDetails from '../pages/service-provider-details';

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/customer-list' element={<Customerlist/>} />
        <Route path='/service-provider-list' element={<Serviceproviderlist/>} />
        <Route path='/service-provider-details/:service_providerId' element={<ServiceProviderDetails />} />
        <Route path='/service-request-list' element={<Towingrequestlist/>} />
        <Route path='/transactions' element={<Transactionhistorypages/>} />
    </Routes>  
    </>
  )
}

export default AllRoutes