import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/shared/header/Header";
import { useParams } from "react-router-dom";
import { serviceRequestDetailsThunk } from "../../store/thunks/serviceRequestThink";
import RequestDetails from "../../components/towing-request-details/Request-details";


const ServiceRequestDetails = () => {
  const { serviceId } = useParams();
  const dispatch = useDispatch();
  const { serviceRequestDetails } = useSelector(
    (state) => state.serviceRequest
  );
  console.log({ serviceRequestDetails });

  useEffect(() => {
    if (serviceId) {
      dispatch(serviceRequestDetailsThunk(serviceId));
    }
  }, [dispatch, serviceId]);

  //   useEffect(() => {
  //     if (service_providerId && spStatusLoading === "success") {
  //       dispatch(serviceProviderDetailsThunk(service_providerId));
  //     }
  //   }, [dispatch, service_providerId, spStatusLoading]);

  return (
    <div>
      <Header heading="Service Request Details" subHeading="Details" />
      <RequestDetails details={serviceRequestDetails} />
    </div>
  );
};

export default ServiceRequestDetails;
