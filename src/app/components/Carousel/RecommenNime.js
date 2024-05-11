"use client"

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommenNime = ({ api }) => {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAnimeData(
        api.data.map((entry) => ({
          mal_id: entry.entry.mal_id,
          imageUrl: entry.entry.images.webp.image_url,
          title: entry.entry.title,
        }))
      );
    }, 0); // Set timeout to 1 second

    return () => clearTimeout(timer);
  }, [api.data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 300,
    slidesToShow: Math.min(animeData.length, 4),
    slidesToScroll: 8,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 8,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 8,
        },
      },
    ],
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!isLoading && (
        <div className="px-4 overflow-y-hidden overflow-x-hidden">
          <Slider {...settings}>
            {animeData.map((anime) => (
              <Link
                key={anime.mal_id}
                href={`/${anime.mal_id}`}
                className="text-color-primary hover:text-color-accent transition-all"
              >
                <div className="relative cursor-pointer">
                  <Image
                    src={anime.imageUrl}
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
          </Slider>
        </div>
      )}
    </Suspense>
  );
};

export default RecommenNime;
