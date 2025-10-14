import apiRequest from "./apiRequest"
import { defer } from "react-router-dom"


export const titlesPageLoader = async ({ request, params }) => {
    const titlesPromise = await apiRequest(`jikan/anime/full`)
    console.log(titlesPromise)
    return defer({
        titlesResponse: titlesPromise
    })
}

export const mangaPageLoader = async ({ request, params }) => {
    const mangaPromise = await apiRequest(`mangadex/manga`)
    return defer({
        mangaResponse: mangaPromise
    })
}

export const mangaByIdPageLoader = async ({ request, params }) => {
    const { id } = params
    const mangaByIdPromise = await apiRequest(`mangadex/manga/${id}`)
    return defer({
        mangaByIdResponse: mangaByIdPromise
    })
}