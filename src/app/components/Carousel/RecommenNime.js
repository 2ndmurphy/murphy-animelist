"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommenNime = ({ api }) => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    setAnimeData(api.data.map(entry => ({
      mal_id: entry.entry.mal_id,
      imageUrl: entry.entry.images.webp.image_url,
      title: entry.entry.title
    })));
  }, [api.data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: Math.min(animeData.length, 4),
    slidesToScroll: 12,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(animeData.length, 4),
          slidesToScroll: 12,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(animeData.length, 3),
          slidesToScroll: 12,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(animeData.length, 2),
          slidesToScroll: 12,
        },
      },
    ],
  }; 

  return (
    <>
      <div className="px-4 overflow-y-hidden overflow-x-hidden">
        <Slider {...settings}>
          {animeData.map((anime) => (
            <Link key={anime.mal_id} href={`/${anime.mal_id}`}>
              <div className="cursor-pointer gap-4">
                <Image
                  src={anime.imageUrl}
                  alt="..."
                  loading="lazy"
                  width={350}
                  height={350}
                  className="w-full max-h-64 object-cover"
                />
                <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default RecommenNime;
