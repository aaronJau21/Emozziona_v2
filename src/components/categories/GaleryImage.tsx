"use client";

import React, { useState } from "react";
import Image from "next/image";
import { allImages } from "./dataImage";
import { popping } from "@/lib/fonts";

// Define the type for an image object
interface Img {
  nombre: string;
  img: string;
  reconocimiento: string;
}

export const GaleryImage = () => {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<Img | null>(null);

  const openModal = (img: Img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="max-w-7xl mx-auto px-5 xl:px-0">
      {allImages.map((image) => (
        <div key={image.name} className="my-16">
          <h2 className="text-3xl font-bold text-primary">{image.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-5">
            {image.category.map((img) => (
              <div key={img.img} className="cursor-pointer">
                <div className="relative overflow-hidden rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl border-8 border-white">
                  {/* Low-quality placeholder skeleton until image loads */}
                  {!loaded[img.nombre] && (
                    <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                  )}

                  <Image
                    src={img.img}
                    alt={`Producto de Emozziona ${img.nombre}`}
                    width={900}
                    height={900}
                    loading="lazy"
                    onLoadingComplete={() =>
                      setLoaded((prev) => ({ ...prev, [img.nombre]: true }))
                    }
                    onClick={() => openModal(img)}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out"
                  />
                </div>
                <p
                  className={`text-lg pt-3 text-primary text-center ${popping.className}`}
                >
                  {img.nombre}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.img}
              alt={`Producto de Emozziona ${selectedImage.nombre}`}
              width={400}
              height={400}
              className="h-auto w-full object-contain mb-4"
            />
            <p className="text-primary font-bold text-xl">
              {selectedImage.reconocimiento}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
