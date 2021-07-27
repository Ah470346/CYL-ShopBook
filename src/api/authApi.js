
import axiosClient from './axiosClient.js';

const authApi= {
    getAuth:(data,param) => {
        const url = '/authen';
        return axiosClient.post(url,data,
            {
                withCredentials: true
            }
        );
    }
}

export default authApi;
