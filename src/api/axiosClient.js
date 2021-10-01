import axios from 'axios';
import { param } from 'jquery';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: "https://bf7d-2402-800-6205-5dfb-394a-43ac-17a0-4877.ngrok.io/api",
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
    //authentication
    return config;
    }, 
    function(error) {
        return Promise.reject(error);
});

axiosClient.interceptors.response.use((res)=>{
    if(res && res.data){
        return res.data;
    }
    return res;
}, (error) => {
    //handel errors
    throw error;
});

export default axiosClient;