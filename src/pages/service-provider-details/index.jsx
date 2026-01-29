import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  serviceProviderDetailsThunk,
  updateServiceProviderStatusThunk,
  getAllPayoutsToSPThunk
} from "../../store/thunks/serviceProviderThunk";
import Header from "../../components/shared/header/Header";
import PersonalInformation from "../../components/service-provider-details/Personal-Information";
import PayoutsTable from "../../components/service-provider-details/PayoutsTable";
import { fetchTransationsSpWiseThunk } from "../../store/thunks/transactionsThunk";
import CollectionTransaction from "../../components/service-provider-details/CollectionTransaction";

const ServiceProviderDetails = () => {
  const { service_providerId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { serviceProviderDetails, spStatusLoading, allPayOuts } = useSelector(
    (state) => state.serviceProvider,
  );

  const {spWiseTransactionData} = useSelector((state)=>state.transaction)
  // const { isDeleateUserLoading } = useSelector((state) => state.auth);


  const updateServiceProviderStatus = (e, data) => {
    e.preventDefault();
    dispatch(updateServiceProviderStatusThunk(data));
  };


  useEffect(() => {
    if (service_providerId) {
      dispatch(serviceProviderDetailsThunk(service_providerId));
      dispatch(getAllPayoutsToSPThunk({serviceProviderId:service_providerId}));
      dispatch(fetchTransationsSpWiseThunk({serviceProviderId:service_providerId}))
    }
  }, [dispatch, service_providerId]);

  useEffect(() => {
    if (service_providerId && spStatusLoading === "success") {
      dispatch(serviceProviderDetailsThunk(service_providerId));
    }
  }, [dispatch, service_providerId, spStatusLoading]);
// console.log({spWiseTransactionData});

  return (
    <div>
      <Header heading="Service Providers" subHeading="Details" />
      <PersonalInformation
        details={serviceProviderDetails}
        updateServiceProviderStatus={updateServiceProviderStatus}
      />
      <CollectionTransaction allCollections={spWiseTransactionData}/>
      <PayoutsTable allPayouts={allPayOuts}/>
    </div>
  );
};

export default ServiceProviderDetails;
