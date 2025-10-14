import axios from "axios"

const apiRequest = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:4444/api/",
    withCredentials: true
})

console.log('API Base URL:', import.meta.env.VITE_API_URL)

export default apiRequest;