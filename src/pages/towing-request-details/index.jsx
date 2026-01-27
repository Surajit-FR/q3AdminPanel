import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/shared/header/Header";
import { useParams } from "react-router-dom";
import { serviceRequestDetailsThunk } from "../../store/thunks/serviceRequestThink";
import RequestDetails from "../../components/towing-request-details/Request-details";
import { getSpLocationThunk } from "../../store/thunks/spLocationThunk";


const ServiceRequestDetails = () => {
  const { serviceId } = useParams();
  const dispatch = useDispatch();
  const { serviceRequestDetails, spCurrentLocation } = useSelector(
    (state) => state.serviceRequest
  );
  //  const [spLocations, setSpLocations] = useState([]);
  console.log({ spCurrentLocation });
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
  useEffect(() => {
    
      const intervalId = setInterval(() => {
        if (serviceId && serviceRequestDetails?.isReqAccepted) {
      // Use the functional form of setSeconds to get the latest state
      dispatch(getSpLocationThunk({serviceId}));
        }
    }, 5000)
      
    
    return () => {
      clearInterval(intervalId);
    }
  }, [dispatch, serviceId, serviceRequestDetails]);
  return (
    <div>
      <Header heading="Service Request Details" subHeading="Details" />
      <RequestDetails details={serviceRequestDetails} spCurrentLocation={spCurrentLocation}/>
    </div>
  );
};

export default ServiceRequestDetails;
