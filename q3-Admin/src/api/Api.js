import axios from "axios";
import { REACT_APP_BASE_URL } from "./apiconfig";
import { setupInterceptors } from "./interceptors";

export const API = axios.create({ baseURL: REACT_APP_BASE_URL, withCredentials: true });

setupInterceptors();

export const LOGIN = (data) => API.post("/auth/signin", data);
export const GETALLCUSTOMERS = (data) => {
    // console.log(data?.data.page);
    
    const queryString = new URLSearchParams();
    //     // Add categoryId only if it exists
    if (data?.data.page) {
        queryString.append('page', String(data?.data.page));
    }
    if (data?.data.limit) {
        queryString.append('limit', String(data?.data.limit));
    }
    if (data?.data.query) {
        queryString.append('query', String(data?.data.query));
    }
    return API.get(`/user/fetch-customers?${queryString.toString()}`);
}
export const GETALLSERVICEPROVIDERS = (data) => {
    // console.log(data?.data.page);
    
    const queryString = new URLSearchParams();
    //     // Add categoryId only if it exists
    if (data?.data.page) {
        queryString.append('page', String(data?.data.page));
    }
    if (data?.data.limit) {
        queryString.append('limit', String(data?.data.limit));
    }
    if (data?.data.query) {
        queryString.append('query', String(data?.data.query));
    }
    return API.get(`/user/fetch-poviders?${queryString.toString()}`);
}

export const GETSINGLESERVICEPROVIDER = (serviceProviderId) => {
    const queryString = new URLSearchParams();
   if(serviceProviderId){
    queryString.append('userId', String(serviceProviderId));
   }
   return API.get(`/user/fetch-single-user?${queryString.toString()}`);
}
