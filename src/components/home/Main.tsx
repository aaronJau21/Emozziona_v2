import { arimo } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

export const Main = () => {
  return (
    <>
      <main className="hidden md:block relative h-[90vh] xl:h-[95vh] bg-[url(/home/main-mobile.webp)] bg-cover bg-center">
        {/* Overlay con degradado para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center  text-white text-center px-4">
          <div className="max-w-4xl animate-fade-in-up absolute top-36">
            <h1
              className={`text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg ${arimo.className}`}
            >
              Regalos Personalizados para Momentos Inolvidables
            </h1>
          </div>
        </div>
      </main>

      <main className="md:hidden">
        <Image
          src={"/home/main-mobile.png"}
          alt="Imagen Principal de Emozziona"
          width={500}
          height={500}
          className="w-full"
        />
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8 rounded-lg py-8 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold">
            Regalos Personalizados para Momentos Inolvidables
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base font-semibold text-center">
            En Emozziona, creamos regalos únicos y memorables que reflejan la
            personalidad y el estilo de cada persona. Explora nuestra colección
            y encuentra el regalo perfecto para cualquier ocasión.
          </p>
        </div>
      </main>
    </>
  );
};
