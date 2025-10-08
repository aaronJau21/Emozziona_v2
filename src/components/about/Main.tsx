"use client";

import React from "react";
import { FaGift, FaHandshake, FaHandSparkles, FaLeaf } from "react-icons/fa";
import Image from "next/image";
import { montserrat, trajan } from "@/lib/fonts";

export const MainAbout = () => {
  return (
    <main className="space-y-20 max-w-7xl mx-auto mb-24 px-6">
      {/* Misión */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#13294b] border-b-4 border-[#13294b]/30 inline-block pb-2">
          Nuestra Misión
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
          <div className="w-full md:w-1/2">
            <p
              className={`text-lg text-gray-700 leading-relaxed ${montserrat.className}`}
            >
              Nuestra misión es brindar experiencias memorables a través de
              regalos de calidad que transmitan gratitud, cercanía y valor en
              cada detalle. Buscamos fortalecer las relaciones entre empresas,
              colaboradores y clientes, creando momentos únicos para celebrar,
              disfrutar y conectar de manera auténtica y con conciencia
              ambiental.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/about/vision.png"
              alt="Nuestra Misión"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Visión */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#13294b] border-b-4 border-[#13294b]/30 inline-block pb-2">
          Nuestra Visión
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-4">
          <div className="w-full md:w-1/2">
            <p
              className={`text-lg text-gray-700 leading-relaxed ${montserrat.className}`}
            >
              Ser una empresa líder en Lima y referente en Perú, reconocida por
              transformar el acto de regalar en un momento extraordinario,
              innovador y con compromiso ecofriendly.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/about/mision.png"
              alt="Nuestra Visión"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#13294b] border-b-4 border-[#13294b]/30 inline-block pb-2">
          Nuestra Filosofía
        </h2>
        <p
          className={` mt-4 text-lg text-gray-700 leading-relaxed ${montserrat.className}`}
        >
          Desde la fundación de Emozziona en el año 2022, teníamos una idea
          clara: un regalo es mucho más que un objeto. Regalar es un gesto que
          genera emociones, como sonrisas, abrazos y recuerdos que perduran.
          Nacimos con el propósito de emocionar a las personas, combinando la
          calidad, creatividad y un estilo auténtico, dejando una huella
          positiva en el mundo.
        </p>
      </section>

      {/* Propuesta Única de Valor */}
      <section className="bg-slate-50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold text-center text-[#13294b] mb-16 ${trajan.className}`}>
            Propuesta Única de Valor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 bg-blue-100 rounded-full">
                <FaGift className="text-[#13294b]" size={40} />
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-3 h-14 flex items-center justify-center ${montserrat.className} mb-5`}>
                Regalos Funcionales con Estilo y Calidad
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrecemos regalos que combinan utilidad y elegancia, perfectos
                para personas que valoran la calidad y los detalles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 bg-blue-100 rounded-full">
                <FaHandshake className="text-[#13294b]" size={40} />
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-3 h-14 flex items-center justify-center ${montserrat.className} mb-5`}>
                Asesoría Personalizada
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desde la idea hasta la entrega, te asesoramos para que
                encuentres el regalo ideal que refuerce la relación con tus
                clientes y colaboradores.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 bg-blue-100 rounded-full">
                <FaHandSparkles className="text-[#13294b]" size={40} />
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-3 h-14 flex items-center justify-center ${montserrat.className} mb-5`}>
                Regalos Innovadores
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Si buscas algo diferente, tenemos opciones creativas para
                destacar y dejar huella.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 bg-blue-100 rounded-full">
                <FaLeaf className="text-[#13294b]" size={40} />
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-3 h-14 flex items-center justify-center ${montserrat.className} mb-5`}>
                Sostenibilidad
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cuidamos al planeta con prácticas ecofriendly y empaques
                responsables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
