import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  serviceProviderDetailsThunk,
  updateServiceProviderStatusThunk,
} from "../../store/thunks/serviceProviderThunk";
import Header from "../../components/shared/header/Header";
import PersonalInformation from "../../components/service-provider-details/Personal-Information";

const ServiceProviderDetails = () => {
  const { service_providerId } = useParams();
  const dispatch = useDispatch();
  const { serviceProviderDetails, spStatusLoading } = useSelector(
    (state) => state.serviceProvider
  );

  const updateServiceProviderStatus = (e, data) => {
    e.preventDefault();
    dispatch(updateServiceProviderStatusThunk(data));
  };
  console.log({ serviceProviderDetails });

  useEffect(() => {
    if (service_providerId) {
      dispatch(serviceProviderDetailsThunk(service_providerId));
    }
  }, [dispatch, service_providerId]);

  useEffect(() => {
    if (service_providerId && spStatusLoading === "success") {
      dispatch(serviceProviderDetailsThunk(service_providerId));
    }
  }, [dispatch, service_providerId, spStatusLoading]);

  return (
    <div>
      <Header heading="Service Providers" subHeading="Details" />
      <PersonalInformation
        details={serviceProviderDetails}
        updateServiceProviderStatus={updateServiceProviderStatus}
      />
    </div>
  );
};

export default ServiceProviderDetails;
