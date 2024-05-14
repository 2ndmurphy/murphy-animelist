import { Suspense } from "react"
import { getAnimeResponse } from "../libs/api"
import HeaderBanner from "../components/utilities/HeaderBanner"
import Link from "next/link"
import Image from "next/image"
import Loading from "../loading"


export default async function Page() {
  const recommendAnime = await getAnimeResponse("anime/1/recommendations")
  
  return (
    <div>
      <HeaderBanner title="RECOMMENDATIONS"/>
      <Suspense fallback={
        <div>{<Loading/>}</div>
      }>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
          {recommendAnime.data.map((anime, index) => {
            return (
            <Link href={`/anime/${anime.entry.mal_id}`} key={index} 
            className="cursor-pointer text-center text-color-primary 
            hover:text-color-accent transition-all">
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
                bg-color-secondary bg-opacity-50 font-bold md:text-xl 
                text-md text-white p-4 md:opacity-0 lg:opacity-0
                transition-opacity duration-300">{anime.entry.title}</h3>
              </div>
            </Link>
            )
          })}
        </div>
      </Suspense>
    </div>
  )
}