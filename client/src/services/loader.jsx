import apiRequest from "./apiRequest"
import { defer } from "react-router-dom"

export const titlesPageLoader = async ({ request, params }) => {
    try {
        console.log('🎌 Loading anime titles...');
        const titlesPromise = apiRequest.get("jikan/anime/full");
        return defer({
            titlesResponse: titlesPromise
        });
    } catch (error) {
        console.error('❌ titlesPageLoader error:', error);
        throw error;
    }
}

export const mangaPageLoader = async ({ request, params }) => {
    try {
        console.log('📚 Loading manga list...');
        const mangaPromise = apiRequest.get("mangadex/manga");
        return defer({
            mangaResponse: mangaPromise
        });
    } catch (error) {
        console.error('❌ mangaPageLoader error:', error);
        throw error;
    }
}

export const mangaByIdPageLoader = async ({ request, params }) => {
    try {
        const { id } = params;
        console.log(`📖 Loading manga details for ID: ${id}`);
        const mangaByIdPromise = apiRequest.get(`mangadex/manga/${id}`);
        return defer({
            mangaByIdResponse: mangaByIdPromise
        });
    } catch (error) {
        console.error('❌ mangaByIdPageLoader error:', error);
        throw error;
    }
}


export const malAnimeSearchLoader = async ({ request, params }) => {
    try {
        const url = new URL(request.url);
        const query = url.searchParams.get('q') || 'one piece';
        const limit = url.searchParams.get('limit') || '10';
        
        console.log(` Searching MAL anime: ${query}, limit: ${limit}`);
        
        const animePromise = apiRequest.get("myAnimeList/anime/list", {
            params: { q: query, limit }
        });
        return defer({
            animeResponse: animePromise
        });
    } catch (error) {
        console.error(' malAnimeSearchLoader error:', error);
        throw error;
    }
}

export const malRandomAnimeLoader = async ({ request, params }) => {
    try {
        console.log(' Loading random anime from MAL...');
        const randomAnimePromise = apiRequest.get("myAnimeList/anime/random", {
            params: { limit: 20 }
        });
        return defer({
            randomAnimeResponse: randomAnimePromise
        });
    } catch (error) {
        console.error(' malRandomAnimeLoader error:', error);
        throw error;
    }
}

export const malAnimeDetailsLoader = async ({ request, params }) => {
    try {
        const { id } = params;
        console.log(` Loading MAL anime details for ID: ${id}`);
        const animeDetailsPromise = apiRequest.get(`myAnimeList/anime/${id}`);
        return defer({
            animeDetailsResponse: animeDetailsPromise
        });
    } catch (error) {
        console.error(' malAnimeDetailsLoader error:', error);
        throw error;
    }
}

export const testLoader = async () => {
    try {
        console.log(' Testing API connection...');
        const testPromise = apiRequest.get("health");
        return defer({
            testResponse: testPromise
        });
    } catch (error) {
        console.error(' Test loader error:', error);
        throw error;
    }
}


export const apiStatusLoader = async () => {
    try {
        console.log(' Checking all API endpoints...');
        
        const endpoints = [
            { url: 'health', name: 'Health Check' },
            { url: 'jikan/anime/full', name: 'Jikan Anime' },
            { url: 'myAnimeList/anime/list', params: { q: 'naruto', limit: 3 }, name: 'MAL Search' }
        ];

        const promises = endpoints.map(async (endpoint) => {
            try {
                const response = await apiRequest.get(endpoint.url, { params: endpoint.params });
                return { 
                    endpoint: endpoint.name, 
                    url: endpoint.url,
                    status: 'success', 
                    data: response.data 
                };
            } catch (error) {
                return { 
                    endpoint: endpoint.name,
                    url: endpoint.url, 
                    status: 'error', 
                    error: error.message,
                    response: error.response?.data 
                };
            }
        });

        const results = await Promise.all(promises);
        
        return defer({
            apiStatus: results
        });
    } catch (error) {
        console.error(' API status loader error:', error);
        throw error;
    }
}