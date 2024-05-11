import Link from "next/link"
import Image from "next/image"
import Header from "../components/AnimeList/Header"

export default async function Page() {
  const baseurl = "https://api.jikan.moe/v4"
  const response = await fetch(`${baseurl}/top/anime`)
  const topAnime = await response.json() // popular anime

  return (
    <div>
      <Header title="MOST POPULAR"/>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
        {topAnime.data.map((anime) => {
          return (
            <div className="relative">
              <Link href={`/anime/${anime.mal_id}`} 
              className="cursor-pointer text-center text-color-primary 
              hover:text-color-accent transition-all">
                <Image 
                  src={anime.images.webp.image_url} 
                  alt="..." 
                  width={350} 
                  height={350}
                  loading="lazy"
                  className="w-full max-h-64 object-cover"
                />
                <h3 className="absolute bottom-0 left-0 right-0 
                bg-color-secondary bg-opacity-50 font-bold md:text-xl 
                text-md text-white text-center p-4 md:opacity-0 lg:opacity-0
                transition-opacity duration-300">{anime.title}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}