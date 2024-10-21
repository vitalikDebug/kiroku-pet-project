import axios from "axios"

export const getSchedule = async (req, res) => {
    try {
        const response = await axios.get("https://api.anilibria.tv/v3/title/schedule")
        res.json(response.data)
    } catch (err) {
        console.log(err)
    }
}


export const getTitleById = async (req, res) => {

    const { id } = req.params;

    try {
        const response = await axios.get(`https://api.anilibria.tv/v3/title?id=${id}`)
        res.json(response.data)
    } catch (err) {
        console.log(err)
    }
}