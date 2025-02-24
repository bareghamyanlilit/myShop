import axios from 'axios';
const API_URL =  "http://localhost:3001/api"
const axiosInstance = axios.create({
    baseURL:  API_URL,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
