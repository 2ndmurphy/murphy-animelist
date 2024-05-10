import Link from "next/link";
import AnimeList from "./components/AnimeList";


export default async function Home() {
  const baseurl = "https://api.jikan.moe/v4"
  const response = await fetch(`${baseurl}/top/anime?limit=12`)
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg md:text-2xl font-bold">PALING POPULER</h1>
        <Link href="/populer" className="underline md:text-xl text-md hover:text-indigo-500 transition-all">Lihat semua</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
        {anime.data.map(datas => {
          return (
            <div key={datas.mal_id} className="shadow-xl">
              <AnimeList
                id={datas.mal_id}
                title={datas.title}
                images={datas.images.webp.image_url}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}
