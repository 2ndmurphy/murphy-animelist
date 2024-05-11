import Header from "./components/AnimeList/Header";
import PopularNime from "./components/Carousel/Popular";
import RecommenNime from "./components/Carousel/RecommenNime";

export default async function Home() {
  const baseurl = "https://api.jikan.moe/v4" // URL to API endpoint

  const response1 = await fetch(`${baseurl}/top/anime?limit=8`)
  const topAnime = await response1.json() // popular anime
  
  const animeId = 1 
  const response2 = await fetch(`${baseurl}/anime/${animeId}/recommendations?limit=8`)
  const newAnime = await response2.json() // Rekomendasi anime

  return (
    <>
      {/* POPULAR ANIME */}
      <section>
        <Header linkHref="/populer" linkTitle="See All" title="MOST POPULAR" />
        <PopularNime api={topAnime} />
      </section>

      {/* RECOMMENDED ANIME */}
      <section>
        <Header linkHref="/" linkTitle="See All" title="RECOMMENDATIONS" />
        <RecommenNime api={newAnime} />
      </section>
    </>
  );
}
