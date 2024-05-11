import Image from "next/image"
import Link from "next/link"

const AnimeList = async({ api }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <div className="relative">
            <Link href={`/${anime.mal_id}`} 
            className="cursor-pointer text-color-primary 
            hover:text-color-accent transition-all text-center">
              <Image 
                src={anime.images.webp.image_url} 
                alt="..." 
                width={350} 
                height={350}
                loading="lazy"
                className="w-full max-h-64 object-cover"
              />
              <h3 className="absolute bottom-0 left-0 right-0 
              font-bold md:text-xl bg-color-secondary bg-opacity-50 
              text-md p-4">{anime.title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default AnimeList