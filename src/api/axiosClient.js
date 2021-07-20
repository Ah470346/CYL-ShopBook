import axios from 'axios';
import { param } from 'jquery';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: "/api",
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