const { param } = require("jquery");
const { default: axiosClient } = require("./axiosClient");

const UsersApi =  {
    getAll: (params) =>{
        const url = '/users';
        return axiosClient.get(url,params);
    },
    createUser: (data, param) => {
        const url = '/users';
        return axiosClient.post(url,data,param);
    } 
}

export default UsersApi;

