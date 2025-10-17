"use client";

import React from "react";
import { FaGift, FaHandshake, FaHandSparkles, FaLeaf } from "react-icons/fa";
import Image from "next/image";
import { montserrat, trajan } from "@/lib/fonts";

export const MainAbout = () => {
  return (
    <main className="mx-auto mb-24 px-6 md:px-8 lg:px-10 max-w-6xl space-y-24">
      {/* Misión */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#13294b] inline-block pb-2 border-b-4 border-[#e8a54d]">
          Nuestra Misión
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <p
              className={`text-[1.125rem] md:text-lg text-gray-700 leading-relaxed ${montserrat.className} text-justify`}
            >
              Nuestra misión es brindar experiencias memorables a través de
              regalos de calidad que transmitan gratitud, cercanía y valor en
              cada detalle. Buscamos fortalecer las relaciones entre empresas,
              colaboradores y clientes, creando momentos únicos para celebrar,
              disfrutar y conectar de manera auténtica y con conciencia
              ambiental.
            </p>
          </div>

          {/* Imagen */}
          <div className="flex md:justify-center">
            <Image
              src="/about/vision.png"
              alt="Nuestra Misión"
              width={520}
              height={360}
              className="rounded-3xl object-cover shadow-lg ring-1 ring-black/5 hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Visión */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#13294b] inline-block pb-2 border-b-4 border-[#e8a54d]">
          Nuestra Visión
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="order-2 md:order-1">
            <p
              className={`text-[1.05rem] md:text-lg text-gray-700 leading-relaxed ${montserrat.className} text-justify`}
            >
              Ser una empresa líder en Lima y referente en Perú, reconocida por
              transformar el acto de regalar en un momento extraordinario,
              innovador y con compromiso eco-friendly. Desde la fundación de{" "}
              <span className="font-semibold">Emozziona</span> en 2022, tenemos
              una idea clara: un regalo es mucho más que dar un objeto; es un
              gesto que genera emociones, sonrisas, abrazos y recuerdos que
              perduran. Nacimos con el propósito de emocionar a las personas,
              combinando calidad, creatividad y un estilo auténtico, dejando una
              huella positiva en el mundo.
            </p>
          </div>

          {/* Imagen */}
          <div className="order-1 md:order-2 flex md:justify-center">
            <Image
              src="/about/mision.png"
              alt="Nuestra Visión"
              width={520}
              height={360}
              className="rounded-3xl object-cover shadow-lg ring-1 ring-black/5 hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="relative rounded-3xl bg-[#f8f5f2] p-8 md:p-12 ring-1 ring-black/5">
        {/* acentos suaves */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#e8a54d]/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#13294b]/10 blur-3xl"
        />

        <h2 className="relative text-3xl sm:text-4xl font-semibold text-[#13294b] inline-block pb-2 border-b-4 border-[#e8a54d]">
          Nuestra Filosofía
        </h2>

        <p
          className={`relative mt-6 text-[1.05rem] md:text-lg text-gray-700 leading-relaxed ${montserrat.className} text-justify`}
        >
          En Emozziona creemos que regalar va más allá de un objeto. Es una
          forma de transmitir emociones, gratitud y cercanía. Cada detalle está
          pensado para generar una conexión auténtica y duradera, combinando{" "}
          <span className="font-semibold text-[#b25b12]">
            calidad, creatividad y consciencia ambiental
          </span>{" "}
          para dejar una huella positiva.
        </p>
      </section>

      {/* Propuesta Única de Valor */}
      <section className="py-16">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center text-[#13294b] ${trajan.className}`}
        >
          Propuesta Única de Valor
        </h2>

        <p className={`mt-4 text-center text-gray-600 ${montserrat.className}`}>
          Soluciones de gifting que combinan estética, funcionalidad y
          sostenibilidad.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card base */}
          {[
            {
              icon: <FaGift size={40} className="text-[#13294b]" />,
              title: "Regalos Funcionales con Estilo",
              text: "Combinamos utilidad y elegancia para personas que valoran la calidad y los detalles.",
            },
            {
              icon: <FaHandshake size={40} className="text-[#13294b]" />,
              title: "Asesoría Personalizada",
              text: "Te acompañamos desde la idea hasta la entrega para reforzar la relación con tus clientes y colaboradores.",
            },
            {
              icon: <FaHandSparkles size={40} className="text-[#13294b]" />,
              title: "Regalos Innovadores",
              text: "Opciones creativas y diferentes para destacar y dejar huella.",
            },
            {
              icon: <FaLeaf size={40} className="text-[#13294b]" />,
              title: "Sostenibilidad",
              text: "Cuidamos el planeta con prácticas eco-friendly y selección responsable de materiales.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-md ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#d6ccc3]/40 group-hover:bg-[#e8a54d]/30 transition-colors">
                {c.icon}
              </div>
              <h3
                className={`mb-3 text-xl font-semibold text-gray-900 text-center ${montserrat.className}`}
              >
                {c.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
