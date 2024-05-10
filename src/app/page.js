import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";

export default async function Home() {
  const baseurl = "https://api.jikan.moe/v4"
  const response = await fetch(`${baseurl}/top/anime?limit=8`)
  const topAnime = await response.json() // popular anime

  return (
    <>
      {/* POPULAR ANIME */}
      <section>
        <Header linkHref="/populer" linkTitle="Lihat semua" title="PALING POPULER" />
        <AnimeList api={topAnime}/>
      </section>
    </>
  );
}
