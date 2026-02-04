import axios from "axios";
import { REACT_APP_BASE_URL } from "./apiConfig";
import { setupInterceptors } from "./interceptors";

export const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  withCredentials: true,
});

setupInterceptors();

export const LOGIN = (data) => API.post("/auth/signin", data);
export const GETALLCUSTOMERS = (data) => {
  // console.log(data?.data.page);

  const queryString = new URLSearchParams();
  //     // Add categoryId only if it exists
  if (data?.data.page) {
    queryString.append("page", String(data?.data.page));
  }
  if (data?.data.limit) {
    queryString.append("limit", String(data?.data.limit));
  }
  if (data?.data.query) {
    queryString.append("query", String(data?.data.query));
  }
  return API.get(`/user/fetch-customers?${queryString.toString()}`);
};
export const GETALLSERVICEPROVIDERS = (data) => {
  // console.log(data?.data.page);

  const queryString = new URLSearchParams();
  //     // Add categoryId only if it exists
  if (data?.data.page) {
    queryString.append("page", String(data?.data.page));
  }
  if (data?.data.limit) {
    queryString.append("limit", String(data?.data.limit));
  }
  if (data?.data.query) {
    queryString.append("query", String(data?.data.query));
  }
  return API.get(`/user/fetch-poviders?${queryString.toString()}`);
};

export const GETSINGLESERVICEPROVIDER = (serviceProviderId) => {
  const queryString = new URLSearchParams();
  if (serviceProviderId) {
    queryString.append("userId", String(serviceProviderId));
  }
  return API.get(`/user/fetch-single-user?${queryString.toString()}`);
};
export const GETALLSERVICEEREQUESTS = (data) => {
  // console.log(data?.data.page);

  const queryString = new URLSearchParams();
  //     // Add categoryId only if it exists
  if (data?.data.page) {
    queryString.append("page", String(data?.data.page));
  }
  if (data?.data.limit) {
    queryString.append("limit", String(data?.data.limit));
  }
  if (data?.data.query) {
    queryString.append("query", String(data?.data.query));
  }
  return API.get(`/service/fetch-all-request?${queryString.toString()}`);
};

export const GETSINGLESERVICEREQUEST = (serviceProviderId) => {
  const queryString = new URLSearchParams();
  if (serviceProviderId) {
    queryString.append("serviceId", String(serviceProviderId));
  }
  return API.get(`/service/fetch-single-request?${queryString.toString()}`);
};

export const GETCOSTINGdETAILS = () => {
  return API.get("/pricing-rule");
};
export const UPDATECOSTINGDETAIL = (priceRuleId, data) =>
  API.put(`/pricing-rule/${priceRuleId}`, data);

export const GETCOSTINGCONTACT = () => {
  return API.get("/pricing-rule/custom-rule");
};
export const UPDATECOSTINGCONTACTDETAIL = (priceRuleId, data) =>
  API.put(`/pricing-rule/custom-rule/${priceRuleId}`, data);

export const VERIFYSERVICEPROVIDERSTATUS = (serviceProviderId, data) =>
  API.post(`/auth/verify-sp/${serviceProviderId}`, data);

export const GETDASHBOARDKPIDATA = () => {
  return API.get("/auth/get-card-value");
};

// export const GETTRANSACTIONDATA = () => {
//   return API.get("service/fetch-transactions");
// };
export const GETTRANSACTIONDATA = (data) => {
  // console.log(data?.data.page);

  const queryString = new URLSearchParams();
  //     // Add categoryId only if it exists
  if (data?.data.page) {
    queryString.append("page", String(data?.data.page));
  }
  if (data?.data.limit) {
    queryString.append("limit", String(data?.data.limit));
  }
  if (data?.data.query) {
    queryString.append("query", String(data?.data.query));
  }
  return API.get(`service/fetch-transactions?${queryString.toString()}`);
};

export const BANUNBANCUSTOMER = (data) =>
  API.post(`/auth/ban-customer`, data);

export const BANUNBANSERVICEPROVIDER = (data) =>
  API.post(`/auth/ban-sp`, data);

export const GETDASHBOARDPERFORMERDATA = () => {
  return API.get("/user/fetch-top-performing-poviders");
};

export const DELETEUSER = (data) =>
  API.post(`/auth/delete-user`, data);

export const GETSPLOCATIONDATA = (data) =>
  API.post(`/location-session/fetch-sp-location`, data);

export const GIVEPAYMENTSP = (data) =>
  API.post(`/stripe/payout-sp`, data);

export const GETPAYOUTSTOSP = (data) =>
  API.post(`/stripe/fetch-payout`, data);
export const FETCHTRANSACTIONSPWISE = (data) =>
  API.post(`service/fetch-transactions-spwise`, data);

export const GETALLCUSTOMERQUERIES = () => {
  return API.get("/contact-us/fetch-queries");
};
