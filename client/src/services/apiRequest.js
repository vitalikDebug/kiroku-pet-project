import axios from "axios"

const API_BASE_URL = "https://kiroku-pet-project.vercel.app/"

const apiRequest = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})

apiRequest.interceptors.request.use(
    (config) => {
        console.log('Making API request to:', config.url)
        return config
    },
    (error) => {
        console.error('API request error:', error)
        return Promise.reject(error)
    }
)

export default apiRequest;