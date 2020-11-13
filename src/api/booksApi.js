import axiosClient from './axiosClient.js';

const BooksApi = {
    getAll: (params) => {
        const url = '/books';
        return axiosClient.get(url,params);
    }
}

export default BooksApi;