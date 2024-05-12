"use client"

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import loading from "@/app/loading";

const PopularNime = ({ api }) => {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAnimeData(api.data);
    }, 0); // Set timeout to 0.3 second

    return () => clearTimeout(timer);
  }, [api.data]);


  return (
    <Suspense fallback={
      <div>{<loading/>}</div>
    }>
      {!isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {animeData?.map((anime) => (
            <Link
              key={anime.mal_id}
              href={`/${anime.mal_id}`}
              className="text-color-primary hover:text-color-accent transition-all"
            >
              <div className="relative cursor-pointer gap-4">
                <Image
                  src={anime.images.webp.image_url}
                  alt="..."
                  loading="lazy"
                  width={350}
                  height={350}
                  className="w-full max-h-64 object-cover"
                />
                <h3 className="absolute bottom-0 left-0 right-0 
                font-bold bg-color-secondary bg-opacity-50 
                md:text-xl text-md p-4">{anime.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Suspense>
  );
};

export default PopularNime;
