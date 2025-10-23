// Автоматическое определение базового URL
const isProduction = import.meta.env.PROD;
export const API_BASE_URL = isProduction
    ? '/api'
    : 'http://localhost:4444/api';

export const getApiUrl = (endpoint) => {
    return `${API_BASE_URL}${endpoint}`;
};


console.log('API Base URL:', API_BASE_URL);
console.log('Environment:', import.meta.env.MODE);