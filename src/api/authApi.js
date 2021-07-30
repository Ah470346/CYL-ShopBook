
import axiosClient from './axiosClient.js';

const authApi= {
    getAuth:(data,param) => {
        const url = '/authen';
        return axiosClient.post(url,data,
            {
                withCredentials: true
            }
        );
    },
    register:(data,param) => {
        const url = '/authen/register';
        return axiosClient.post(url,data,
            {
                withCredentials: true
            }
        );
    }
}

export default authApi;
