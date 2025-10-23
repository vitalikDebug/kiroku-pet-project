import axios from "axios"


const API_BASE_URL = import.meta.env.PROD
    ? '/api'
    : 'http://localhost:4444/api';

console.log('📡 API Configuration:');
console.log('Environment:', import.meta.env.MODE);
console.log('API Base URL:', API_BASE_URL);
console.log('Production:', import.meta.env.PROD);

const apiRequest = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})


apiRequest.interceptors.request.use(
    (config) => {
        console.log(`🔄 [API Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
        console.log('Request config:', {
            baseURL: config.baseURL,
            url: config.url,
            params: config.params
        });
        return config;
    },
    (error) => {
        console.error(' [API Request Error]', error);
        return Promise.reject(error);
    }
);

apiRequest.interceptors.response.use(
    (response) => {
        console.log(` [API Response] ${response.status} ${response.config.url}`);
        return response;
    },
    (error) => {
        console.error(` [API Response Error] ${error.config?.url}`, {
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data
        });
        return Promise.reject(error);
    }
);

export default apiRequest;