import { Suspense } from "react";
import { getAnimeResponse } from "./libs/api";
import Header from "./components/AnimeList/Header";
import PopularNime from "./components/Carousel/Popular";
import RecommenNime from "./components/Carousel/RecommenNime";
import Loading from "./loading";


export default async function Home() {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const recommended = await getAnimeResponse("anime/1/recommendations", "limit=8")

  return (
    <>
      <Suspense fallback={
        <div>{<Loading/>}</div>
      }>
        {/* POPULAR ANIME */}
        <section>
          <Header linkHref="/populer" linkTitle="See All" title="MOST POPULAR" />
          <PopularNime api={topAnime} />
        </section>

        {/* RECOMMENDED ANIME */}
        <section>
          <Header linkHref="/recommendation" linkTitle="See All" title="RECOMMENDATIONS" />
          <RecommenNime api={recommended} />
        </section> 
      </Suspense>
    </>
  );
}
