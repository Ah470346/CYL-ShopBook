
import axiosClient from './axiosClient.js';

const authApi= {
    getToken:(data,param) => {
        const url = '/authen';
        return axiosClient.post(url,data,
            {
                withCredentials: true
            }
        );
    }
}

export default authApi;
