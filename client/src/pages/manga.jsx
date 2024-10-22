import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import MangaList from "../components/mangaList/mangaList";

const Manga = () => {
  const data = useLoaderData();

  return (
    <Suspense fallback={<div>...loading</div>}>
      <Await
        resolve={data.mangaResponse}
        errorElement={<p>Error loading manga</p>}
      >
        {(mangaPromise) => <MangaList items={mangaPromise.data} />}
      </Await>
    </Suspense>
  );
};

export default Manga;
