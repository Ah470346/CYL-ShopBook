import axiosClient from './axiosClient.js';

const MenuBookApi = {
    getAll: (params) => {
        const url = '/menuBook';
        return axiosClient.get(url,params);
    }
}
export default MenuBookApi;