import { getAnimeResponse } from '@/app/libs/api'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Page = async({ params: { id } }) => {
  
  const anime = await getAnimeResponse(`anime/${id}/full`)
  console.log(anime);
  return (
    <div className='pt-8 px-8'>
      <div className='flex flex-wrap gap-2'>
        {/* ANIME DETAIL */}
        <section className='flex relative flex-wrap sm:flex-nowrap justify-center gap-4'>
          <Image 
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}  
            width={200}
            height={200}
            className='rounded'
          />
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-md text-color-primary">
                <li>
                  <Link href="/" className="block transition hover:text-color-accent">
                    <span className="sr-only"> Home </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <Link href="/" className="block transition hover:text-color-accent"> Anime </Link>
                </li>
                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <h3 className="block transition hover:text-color-accent"> {anime.data.title} </h3>
                </li>
              </ol>
            </nav>
            
            <div className='mt-5'>
              <h1 className="block text-3xl transition mb-8 text-color-primary hover:text-color-accent"> {anime.data.title} - {anime.data.year} </h1>
            </div>
            
            <div className='block text-color-primary mb-4'> 
              <ul className='flex flex-row items-center gap-2'>
                <li>
                  <h3 className='border w-auto px-1 rounded'>HD</h3>
                </li>
                <li>
                  <h3>
                    <Link href="/" className='border px-1 w-auto rounded'> Sub Indo </Link>
                  </h3>
                </li>
                <li>
                  <h3>•</h3>
                </li>
                <li>
                  <h3>Anime</h3>
                </li>
                <li>
                  <h3>•</h3>
                </li>
                <li>
                  <h3>{anime.data.duration}</h3>
                </li>
                <li>
                  <h3>•</h3>
                </li>
                <li>
                  <h3>{anime.data.episodes} Episodes</h3>
                </li>
              </ul>
            </div>
            
            <div class="scrollbar scrollbar-thumb-color-accent scrollbar-track-sky-700 w-auto md:w-[34rem] h-32 overflow-y-scroll">
              <p class="text-color-primary h-64 bg-color-dark">{anime.data.synopsis}</p>
            </div>
          </div>
          
          {/* GENRED AND THEME */}
          <div className='hidden md:block p-8 ml-[480px] md:w-52 w-auto h-auto bg-color-accent rounded'>
            <h3 className='mb-2'>{anime.data.title_english}</h3>
            <h3 className='mb-2'>MAL Rank: {anime.data.rank}</h3>
            <h3 className='mb-2'>MAL Score: {anime.data.score}</h3>
            <h3 className='mb-2'>Rating: {anime.data.rating}</h3>
            <h3 className='mb-2'>Aired: {anime.data.aired.prop.from.day} {anime.data.aired.prop.from.month} {anime.data.aired.prop.from.year}</h3>
            <h3 className='mb-2'>Popularity: {anime.data.popularity}</h3>
          </div>
        </section>
        {/* ANIME DETAIL END */}
      </div>
    </div>
  )
}

export default Page