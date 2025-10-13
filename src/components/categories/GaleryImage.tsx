"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const allImages = [
  "/categories/1.png",
  "/categories/2.png",
  "/categories/3.png",
  "/categories/4.png",
  "/categories/5.png",
  "/categories/6.png",
  "/categories/7.png",
  "/categories/8.png",
  "/categories/9.png",
  "/categories/10.png",
  "/categories/11.png",
  "/categories/12.png",
  "/categories/13.png",
  "/categories/14.png",
  "/categories/15.png",
  "/categories/16.png",
  "/categories/17.png",
  "/categories/18.png",
  "/categories/19.png",
  "/categories/20.png",
  "/categories/21.png",
  "/categories/22.png",
  "/categories/23.png",
  "/categories/24.png",
  "/categories/25.png",
  "/categories/26.png",
  "/categories/27.png",
  "/categories/28.png",
  "/categories/29.png",
  "/categories/30.png",
  "/categories/31.png",
  "/categories/32.png",
  "/categories/33.png",
  "/categories/34.png",
  "/categories/36.png",
  "/categories/37.png",
  "/categories/38.png",
  "/categories/39.png",
  "/categories/40.png",
];

const IMAGES_PER_PAGE = 12;

export const GaleryImage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="rounded-4xl"
            loading="lazy"
          />
        ))}
      </div>
      {hasMore && (
        <div className="text-center py-8">
          <button
            onClick={loadMoreImages}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
};
