import Link from "next/link"
import Image from "next/image"
import Header from "../components/AnimeList/Header"

export default async function Page() {
  const baseurl = "https://api.jikan.moe/v4"
  const response = await fetch(`${baseurl}/anime/1/recommendations`)
  const recommendAnime = await response.json() // popular anime

  return (
    <div>
      <Header title="RECOMMENDATIONS"/>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
        {recommendAnime.data.map((anime) => {
          return (
          <Link href={`/${anime.entry.mal_id}`} className="cursor-pointer">
            <div className="relative flex flex-col">
              <Image 
                src={anime.entry.images.webp.image_url} 
                alt="..." 
                width={350} 
                height={350}
                loading="lazy"
                className="w-full max-h-64 object-cover"
              />
              <h3 className="absolute bottom-0 left-0 right-0 
              bg-black bg-opacity-50 font-bold md:text-xl 
              text-md text-white text-center p-4">{anime.entry.title}</h3>
            </div>
          </Link>
          )
        })}
      </div>
    </div>
  )
}