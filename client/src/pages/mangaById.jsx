import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"
import MangaById from "../components/mangaById/mangaById"


const MangaFullDesc = () => {
    const data = useLoaderData()
    return (
       <Suspense><Await resolve={data.mangaByIdResponse} errorElement={<p>
        error page loader
       </p>}>
            {(mangaByIdPromise) => <MangaById items={mangaByIdPromise.data}/>}
        </Await></Suspense>
    )

}  

export default MangaFullDesc
