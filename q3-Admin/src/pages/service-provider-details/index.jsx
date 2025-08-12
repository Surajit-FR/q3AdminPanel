import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { serviceProviderDetailsThunk } from "../../store/thunks/serviceProviderThunk";
import Header from "../../components/shared/header/Header";
import PersonalInformation from "../../components/service-provider-details/Personal-Information";

const ServiceProviderDetails = () => {
  const { service_providerId } = useParams();
  const dispatch = useDispatch();
  const { serviceProviderDetails } = useSelector(
    (state) => state.serviceProvider
  );
console.log({serviceProviderDetails});

  useEffect(() => {
    if (service_providerId) {
      dispatch(serviceProviderDetailsThunk(service_providerId));
    }
  }, [dispatch, service_providerId]);

  return (
    <div>
      <Header heading="Service Providers" subHeading="Details" />
      <PersonalInformation details={serviceProviderDetails}/>
    </div>
  );
};

export default ServiceProviderDetails;
