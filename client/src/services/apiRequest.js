import axios from "axios"


const API_BASE_URL = "https://kiroku-pet-project.vercel.app/"

const apiRequest = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})

console.log('API Base URL:', API_BASE_URL)

export default apiRequest;