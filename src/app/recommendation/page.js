import Link from "next/link"
import Image from "next/image"
import Header from "../components/AnimeList/Header"

export default async function Page() {
  const baseurl = "https://api.jikan.moe/v4"
  const anime_id = 1
  const response = await fetch(`${baseurl}/anime/${anime_id}/recommendations`)
  const recommendedAnime = await response.json() // recommended anime


  return (
    <div>
      <Header title="RECOMMENDATIONS"/>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
        {recommendedAnime.data.map((anime) => (
          <Link href={`/${anime.entry.mal_id}`} key={anime.entry.mal_id} className="cursor-pointer">
            <Image 
              src={anime.entry.images.webp.image_url} 
              alt="..."
              width={350} 
              height={350}
              loading="lazy"
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl text-md p-4">{anime.entry.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
