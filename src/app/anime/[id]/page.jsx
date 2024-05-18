"use client"

import { getAnimeResponse } from '@/app/libs/api'
import { Play } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Page = async({ params: { id } }) => {
  
  const anime = await getAnimeResponse(`anime/${id}/full`)
  
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-2 px-6 w-full h-[450px] bg-color-primary bg-opacity-50'>
      <section className='flex-1 h-full w-[800px]'>
        <header aria-label="Breadcrumb" className='hidden md:block ml-[250px] mt-4 mb-6'>
          <ol className="flex items-center gap-1 text-sm text-gray-600">
            <li>
              <a href="#" className="block transition hover:text-gray-700">
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
              </a>
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
              <a href="#" className="block transition hover:text-gray-700"> Anime </a>
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
              <a href="#" className="block transition hover:text-gray-700"> {anime.data.title} </a>
            </li>
          </ol>
        </header>
        
        <div className='flex flex-wrap md:flex-nowrap'>
          <div className='rounded'>
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.images.jpg.image_url}
              width={230}
              height={230}
              className='rounded object-cover'
            />
          </div>
          
          <div className='block gap-4 mb-5 ml-5'>
            <h1 className='text-3xl mb-8 text-color-primary'>{anime.data.title} - {anime.data.year}</h1>
            
            <div className='mb-8'>
              <ul className='flex gap-2 text-color-secondary'>
                <li className='px-2 border rounded border-color-secondary'>HD</li>
                <li className='px-2 border rounded border-color-secondary'>Sub Indo</li>
                <li>•</li>
                <li>Anime</li>
                <li>•</li>
                <li>{anime.data.duration}</li>
                <li>•</li>
                <li>Ep {anime.data.episodes}</li>
              </ul>
            </div>
            
            <div className='flex items-center relative mb-4'>
              <button className='flex px-6 py-2 rounded-3xl bg-color-secondary text-color-primary'>
                <span className='mr-2'><Play size={25} /></span>
                Watch Now
              </button>
            </div>
            
            <div className='scrollbar overflow-y-auto text-sm w-[790px] h-[100px] overflow-hidden text-color-primary'>
              <p>{anime.data.synopsis}</p>
            </div>
            <h3 className='text-color-secondary text-lg mt-3'>NONTON ANIME GRATIS HANYA DI MURPHYNIME!</h3>
            
          </div>
        </div>
      </section>
      
      <section className='w-[300px] py-20 px-4 h-full bg-color-dark bg-opacity-50'>
        <div className='flex justify-center items-center'>
          <ul className='text-color-primary text-lg'>
            <li>Judul Alternatif: {anime.data.title_english}</li>
            <li>Rating: {anime.data.rating}</li>
            <li>MAL Score: {anime.data.score}</li>
            <li>Aired: {anime.data.aired.prop.from.day} - {anime.data.aired.prop.from.month} - {anime.data.aired.prop.from.year}</li>
            <li>Type: {anime.data.type}</li>
            <li>Status: {anime.data.status}</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Page