"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularNime = ({ api }) => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    // Mengambil data dari API dan menyimpannya dalam state ketika komponen dimuat
    setAnimeData(api.data);
  }, [api.data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: Math.min(api.data.length, 4),
    slidesToScroll:8,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(api.data.length, 4),
          slidesToScroll:8,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(api.data.length, 3),
          slidesToScroll:8,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(api.data.length, 2),
          slidesToScroll:8,
        },
      },
    ],
  }; 

  return (
    <>
      <div className="px-4 overflow-y-hidden overflow-x-hidden">
        <Slider {...settings}>
          {animeData.map((anime) => (
            <Link key={anime.mal_id} href={`/${anime.mal_id}`} className="text-color-primary hover:text-color-accent transition-all">
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
        </Slider>
      </div>
    </>
  );
};

export default PopularNime;
