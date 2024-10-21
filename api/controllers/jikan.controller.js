import axios from "axios"
import rateLimit from "axios-rate-limit"

const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000 });

export const getAnimeFullById = async (req, res) => {
    const animeIds = [52991, 37450, 39486, 44511, 50602, 49596];
    try {
        const animeDataPromises = animeIds.map(async (id) => {
            const response = await http.get(`https://api.jikan.moe/v4/anime/${id}/full`);
            return response.data;
        });
        const animeData = await Promise.all(animeDataPromises);
        res.json(animeData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching anime data' });
    }
}

export const getCharacters = async (req, res) => {
    try {
        const response = await axios.get("https://api.jikan.moe/v4/anime/1/characters")
        res.json(response.data)
    } catch (err) {
        console.log(err)
    }
}


// export const getAnimeFullById = async (req, res) => {

//     const { id } = req.params

//     try {
//         const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
//         res.json(response.data)
//     } catch (err) {
//         console.log(err)
//     }
// }
