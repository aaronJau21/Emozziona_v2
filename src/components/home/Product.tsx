"use client";

import { trajan } from "@/lib/fonts";
import Image from "next/image";
import { useMemo, useState } from "react";

type Category =
  | "global"
  | "corporativo"
  | "personales"
  | "merchandising"
  | "echo_mano";

export const Product = () => {
  const estilosBotonesBase =
    "px-8 py-3 bg-transparent border-2 border-marron text-marron font-semibold rounded-full transition-all duration-300 ease-in-out cursor-pointer";
  const estilosBotonesHover = "hover:bg-marron hover:text-white";

  const [category, setCategory] = useState<Category>("global");

  // Lista completa de imágenes
  const allImages: string[] = [
    "/home/personales/1.png",
    "/home/personales/2.png",
    "/home/personales/3.png",
    "/home/personales/4.png",
    "/home/corporativo/1.png",
    "/home/corporativo/2.png",
    "/home/corporativo/3.png",
    "/home/corporativo/4.png",
    "/home/merchandising/1.png",
    "/home/merchandising/2.png",
    "/home/merchandising/3.png",
    "/home/echo_mano/1.png",
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
          className={buttonClass("personales")}
          onClick={() => setCategory("personales")}
        >
          Personales
        </button>
        <button
          className={buttonClass("merchandising")}
          onClick={() => setCategory("merchandising")}
        >
          Merchandising
        </button>
        <button
          className={buttonClass("echo_mano")}
          onClick={() => setCategory("echo_mano")}
        >
          Echo a mano
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
