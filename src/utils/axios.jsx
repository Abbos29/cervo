// utils/axios.js
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API_BASE_URL,
});
