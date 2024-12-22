import axios from "axios";

export const customAxios = axios.create({
    baseURL : 'https://dummyjson.com',
    timeout : 4000
})