import axios from "axios";

const MAL_CLIENT_ID = 'ad83edbe9125626aea8932f2554b7780';

export const getAnimeList = async (req, res) => {
    try {
        const response = await axios.get("https://api.myanimelist.net/v2/anime/ranking", {
            headers: {
                'X-MAL-CLIENT-ID': MAL_CLIENT_ID
            },
            params: {
                ranking_type: 'all', // или 'airing', 'upcoming', 'tv', 'movie' etc.
                limit: 100,
                offset: Math.floor(Math.random() * 500), // случайное смещение от 0 до 500
                fields: 'id,title,main_picture,mean,rank,genres,media_type,start_date'
            }
        });


        const shuffledData = response.data.data.sort(() => Math.random() - 0.5);

        res.json({
            ranking_type: 'all',
            total: shuffledData.length,
            data: shuffledData.slice(0, 100)
        });

    } catch (err) {
        console.error('Error:', err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to fetch trending anime' });
    }
}