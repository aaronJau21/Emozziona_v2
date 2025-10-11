"use client";

import { trajan } from "@/lib/fonts";
import Image from "next/image";
import { useMemo, useState } from "react";

type Category = "global" | "corporativo" | "casual" | "universitario";

export const Product = () => {
  const estilosBotonesBase =
    "px-8 py-3 bg-transparent border-2 border-marron text-marron font-semibold rounded-full transition-all duration-300 ease-in-out cursor-pointer";
  const estilosBotonesHover = "hover:bg-marron hover:text-white";

  const [category, setCategory] = useState<Category>("global");

  // Lista completa de imágenes
  const allImages: string[] = [
    "/home/casual/1.png",
    "/home/casual/2.png",
    "/home/corporativo/1.png",
    "/home/universitario/1.png",
  ];

  // Imágenes filtradas por categoría
  const filteredImages = useMemo(() => {
    if (category === "global") return allImages;
    const prefix = `/home/${category}/`;
    return allImages.filter((src) => src.startsWith(prefix));
  }, [category, allImages]);

  const buttonClass = (cat: Category) =>
    [
      estilosBotonesBase,
      estilosBotonesHover,
      category === cat ? "bg-marron text-primary" : "",
    ].join(" ");

  return (
    <section
      className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8"
      id="productos"
    >
      <h2
        className={`text-3xl sm:text-4xl text-center text-marron font-bol ${trajan.className}`}
      >
        Productos más populares
      </h2>

      <div className="flex justify-center items-center gap-4 my-8">
        <button
          className={buttonClass("corporativo")}
          onClick={() => setCategory("corporativo")}
        >
          Corporativo
        </button>
        <button
          className={buttonClass("casual")}
          onClick={() => setCategory("casual")}
        >
          Casual
        </button>
        <button
          className={buttonClass("universitario")}
          onClick={() => setCategory("universitario")}
        >
          Universitario
        </button>
        <button
          className={buttonClass("global")}
          onClick={() => setCategory("global")}
        >
          Ver todos
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
        {filteredImages.length === 0 ? (
          <div className="col-span-full text-center text-marron/70">
            No hay imágenes para esta categoría.
          </div>
        ) : (
          filteredImages.map((src, index) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <Image
                src={src}
                alt={`Producto de Emozziona ${index + 1}`}
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};
