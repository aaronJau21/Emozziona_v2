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
    <section className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Confían en nosotros</h2>
        <p className="text-lg text-gray-600 mb-12">
          Grandes marcas confían en Emozziona para transformar sus eventos en
          experiencias memorables.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-52">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={110}
                  height={110}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
