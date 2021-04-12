import axiosClient from './axiosClient.js';

const SlideBooksApi = {
    getAll:(params)=>{
        const url = '/slideBook';
        return axiosClient.get(url,params);
    }
}

export default SlideBooksApi;