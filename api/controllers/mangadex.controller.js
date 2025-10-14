import axios from "axios"
import axiosRetry from "axios-retry"

const baseUrl = "https://api.mangadex.org"
const coverUrl = "https://api.mangadex.org/cover"

export const getAllManga = async (req, res) => {

    axiosRetry(axios, { retries: 3 })

    try {
        const response = await axios.get(`${baseUrl}/manga?limit=50`, {
            timeout: 15000
        })

        const relationshipsFilter = ({ relationships }) => {
            const cover = relationships.find(item => item.type === 'cover_art')
            return cover ? cover.id : null
        }


        const filterData = response.data.data.map(manga => {

            const { relationships, ...rest } = manga
            return {
                ...rest,
                coverId: relationshipsFilter(manga)
            }
        })


        const coverData = await Promise.all(
            filterData.map(async (manga) => {
                if (manga.coverId) {
                    try {
                        const coverResponse = await axios.get(`${coverUrl}/${manga.coverId}`)
                        const fileName = coverResponse.data.data.attributes.fileName
                        return {
                            ...manga,
                            coverUrl: `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`
                        }
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    return { ...manga, coverUrl: null }
                }
            })
        )

        res.json(coverData)
    } catch (error) {
        console.log(error)
    }
}

export const getMangaById = async (req, res) => {
    const { id } = req.params
    console.log(id)

    try {
        const response = await axios.get(`${baseUrl}/manga/${id}`)
        const relationshipsFilter = ({ relationships }) => {
            const cover = relationships.find(item => item.type === 'cover_art')
            return cover ? cover.id : null
        }
        const { relationships, ...rest } = response.data.data
        const filterData = { ...rest, coverId: relationshipsFilter(response.data.data) }
        if (filterData.coverId) {
            try {
                const coverResponse = await axios.get(`${coverUrl}/${filterData.coverId}`);
                const fileName = coverResponse.data.data.attributes.fileName;
                console.log(fileName)
                const mangaWithCover = {
                    ...filterData,
                    coverUrl: `https://uploads.mangadex.org/covers/${filterData.id}/${fileName}`
                };
                try {
                    const chapterId = await axios.get(`${baseUrl}/manga/${mangaWithCover.id}/feed`)
                    try {
                        const resp = await axios.get(`${baseUrl}/at-home/server/${chapterId.data.data[0].id}`)
                        let host = resp.data.baseUrl
                        let chapterHash = resp.data.chapter.hash
                        let data = resp.data.chapter.data
                        let dataSaver = resp.data.chapter.data
                        const newRep = {
                            ...filterData,
                            host: host,
                            chapterHash: chapterHash,
                            chapterData: data,
                            coverUrl: `https://uploads.mangadex.org/covers/${filterData.id}/${fileName}`
                        }
                        // console.log(newRep)
                        // res.json(newRep)

                        try {
                            const resp = await axios.get(`${baseUrl}/statistics/manga/${filterData.id}`)
                            const newRepSecond = {
                                ...newRep,
                                statistics: resp.data.statistics
                            }
                            console.log(newRepSecond)
                            res.json(newRepSecond)
                        } catch (error) {
                            console.log(error)
                        }

                    } catch (error) {
                        console.log(error)
                    }

                } catch (error) {
                    console.log(error)
                }

            } catch (coverError) {
                console.log("Error fetching cover data:", coverError);
                res.status(500).json({ error: "Failed to fetch cover data" });
            }
        } else {

            res.json(filterData);
        }




        // res.json(response.data.data)
    } catch (error) {
        console.log(error)
    }
}

export const getManga = async (req, res) => {

    const title = 'Kanojyo to Himitsu to Koimoyou';

    try {
        const response = await axios({
            method: 'GET',
            url: `${baseUrl}/manga`,
            params: {
                title: title
            }
        })
        // console.log(response.data.data)
        res.json(response.data.data)
    } catch (error) {
        console.log(error)
    }

}


export const getMangaFeed = async (req, res) => {

    const id = '31d67518-dd05-46d2-9d59-4ba730a23a10'

    try {
        const response = await axios.get(`${baseUrl}/manga/${id}/feed`)
        // console.log(response)
        res.json(response.data.data)
    }
    catch (error) {
        console.log(error)
    }

}


export const getMangaStatistics = async (req, res) => {

    const { id } = req.params

    try {
        const resp = await axios.get(`${baseUrl}/statistics/manga/${id}`)
        res.json(resp.data)

    } catch (error) {
        console.log(error)
    }

}



// https://api.mangadex.org/manga/3df1a9a3-a1be-47a3-9e90-9b3e55b1d0ac/feed
// ${baseUrl}/manga/${mangaID}/feed
//https://api.mangadex.org/at-home/server/066fcb79-8fa4-4f05-be91-4cb06119c065
//${baseUrl}/at-home/server/${chapterID}
//https://cmdxd98sb0x3yprd.mangadex.network/data/835fb1fe205292d90f254cc4878aa4cf/16-cffa4a31307f4e051dff58748679d251fcf4e7650cfdb3138d45d7bd0e873680.jpg
//${host}/data/${chapterHash}/${page}