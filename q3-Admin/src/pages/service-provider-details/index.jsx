import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { serviceProviderDetailsThunk } from "../../store/thunks/serviceProviderThunk";

const ServiceProviderDetails = () => {
  const { service_providerId } = useParams();
  const dispatch = useDispatch();
  const { serviceProviderDetails } = useSelector(
    (state) => state.serviceProvider
  );


  useEffect(() => {
    if (service_providerId) {
      dispatch(serviceProviderDetailsThunk(service_providerId));
    }
  }, [dispatch, service_providerId]);

  return <div>Service Provider Details page</div>;
};

export default ServiceProviderDetails;
