import { Suspense } from "react";
import { getAnimeResponse } from "@/app/libs/api.js";
import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import Loading from "../../loading.js"

export default async function Home({params}) {
  const { keyword } = params
  const decodekeys = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodekeys}`) // search anime
  
  return (
    <>
      {/* POPULAR ANIME */}
      <Suspense fallback={
        <div>{<Loading/>}</div>
      }>
        <section>
          <Header title={`Pencarian untuk ${decodekeys}...`}/>
          <AnimeList api={searchAnime}/>
        </section>
      </Suspense>
    </>
  );
}
