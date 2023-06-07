import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',    
    params: {
        key: '862bf7ee5328495a8d9ef91c3136e5ad'
    }
})

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }