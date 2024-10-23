import axios from "axios"

const baseUrl = "https://api.mangadex.org"
const coverUrl = "https://api.mangadex.org/cover"

export const getAllManga = async (req, res) => {
    try {
        const response = await axios.get(`${baseUrl}/manga?limit=50`, {
            timeout: 10000
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



    const id = "0f237a5f-07ad-4e43-bbd9-2a320694434d"

    try {
        const response = await axios.get(`${baseUrl}/manga/${id}`)
        console.log(response)



        res.json(response.data.data)
    } catch (error) {

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

export const getMangaCover = async (req, res) => {

}



export const getMangaChapters = async (req, res) => {
    try {

        const response = await axios.get(`${baseUrl}/at-home/server/04fd6515-cbe9-47f7-95bd-7ce488acb9e4`)
        console.log(response)
        res.json(response.data)

    } catch (error) {
        console.log(error)
    }
}