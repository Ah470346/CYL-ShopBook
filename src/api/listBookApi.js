import axiosClient from './axiosClient.js';

const ListBooksApi = {
    getAll: (params) => {
        const url = '/listBooks';
        return axiosClient.get(url,params);
    }
}
export default ListBooksApi;