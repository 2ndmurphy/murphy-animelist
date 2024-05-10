import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";

export default async function Home({params}) {
  const { keyword } = params
  const baseurl = "https://api.jikan.moe/v4"
  const response = await fetch(`${baseurl}/anime?q=${keyword}`)
  const searchAnime = await response.json() // popular anime

  return (
    <>
      {/* POPULAR ANIME */}
      <section>
        <Header title={`Pencarian untuk ${keyword}...`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
}
