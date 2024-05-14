"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommenNime = ({ api }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (api.data) {
      setIsLoading(false);
    }
  }, [api.data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 300,
    slidesToShow: 4,
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
    <div className="px-4 overflow-y-hidden overflow-x-hidden">
      <Slider {...settings}>
        {api.data?.map((entry) => (
          <Link
            key={entry.entry.mal_id}
            href={`/anime/${entry.entry.mal_id}`}
            className="text-color-primary hover:text-color-accent transition-all"
          >
            <div className="relative cursor-pointer">
              <Image
                src={entry.entry.images.webp.image_url}
                alt={entry.entry.title}
                loading="lazy"
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
              />
              <h3 className="absolute bottom-0 left-0 right-0 
              font-bold bg-color-secondary bg-opacity-50 
              md:text-xl text-md p-4">{entry.entry.title}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default RecommenNime;
