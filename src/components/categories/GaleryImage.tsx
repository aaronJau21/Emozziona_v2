"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { allImages } from "./dataImage";

const IMAGES_PER_PAGE = 8;

export const GaleryImage = () => {
  const [images, setImages] = useState<
    { img: string; reconocimiento: string; presentacion?: string }[]
  >([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    const initialImages = allImages.slice(0, IMAGES_PER_PAGE);
    setImages(initialImages);
    if (allImages.length <= IMAGES_PER_PAGE) {
      setHasMore(false);
    }
  }, []);

  const loadMoreImages = () => {
    if (!hasMore) return;

    const nextPage = page + 1;
    const nextImages = allImages.slice(0, nextPage * IMAGES_PER_PAGE);

    if (nextImages.length >= allImages.length) {
      setHasMore(false);
    }

    setImages(nextImages);
    setPage(nextPage);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, hasMore]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* GRID DE IMÁGENES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {images.map((item, index) => (
          <div
            key={item.img}
            className="group relative overflow-hidden rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl border-8 border-white"
            onMouseEnter={() => setHoveredImage(item.img)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={item.img}
              alt={`Producto de Emozziona ${index + 1}`}
              width={900}
              height={900}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* TEXTO DE RECONOCIMIENTO */}
            {hoveredImage === item.img && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/70 text-white text-center p-4">
                <p className="text-sm md:text-base leading-relaxed font-semibold">
                  {item.reconocimiento}
                </p>
                {item.presentacion && (
                  <p className="text-sm md:text-base leading-relaxed font-semibold">
                    <span className="font-normal">Presentación:</span>{" "}
                    {item.presentacion}
                  </p>
                )}
                <button className="bg-secondary px-3 py-1 rounded-2xl mt-5">
                  Cotizar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BOTÓN CARGAR MÁS */}
      {hasMore && (
        <div className="text-center py-8">
          <button
            onClick={loadMoreImages}
            className="bg-primary hover:bg-secondary transition-colors text-white font-bold py-2 px-4 rounded-lg shadow-md hidden"
          >
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
};
