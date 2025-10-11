"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Image from "next/image";

export const Clients = () => {
  const clients = [
    {
      src: "/home/bcp.jpg",
      alt: "Logo BCP",
    },
    {
      src: "/home/yape.png",
      alt: "Logo Yape",
    },
    {
      src: "/home/Maryale.png",
      alt: "Logo Maryale",
    },
    {
      src: "/home/mbadex.jpg",
      alt: "Logo Mbadex",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Confían en nosotros
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Grandes marcas confían en Emozziona para transformar sus eventos en
            experiencias memorables.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="clients-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="group">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-48 flex items-center justify-center border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={140}
                      height={140}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
