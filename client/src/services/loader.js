import apiRequest from "./apiRequest"
import { defer } from "react-router-dom"


export const titlesPageLoader = async ({ request, params }) => {
    const titlesPromise = await apiRequest(`jikan/anime/full`)
    console.log(titlesPromise)
    return defer({
        titlesResponse: titlesPromise
    })
}