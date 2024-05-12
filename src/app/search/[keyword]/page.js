import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";

export default async function Home({params}) {
  const { keyword } = params
  const decodekeys = decodeURI(keyword)
  const baseurl = "https://api.jikan.moe/v4"
  const response = await fetch(`${baseurl}/anime?q=${decodekeys}`)
  const searchAnime = await response.json() // search anime

  return (
    <>
      {/* POPULAR ANIME */}
      <section>
        <Header title={`Pencarian untuk ${decodekeys}...`}/>
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
}
