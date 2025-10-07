"use client";

import React from "react";
import { FaGift, FaHandshake, FaHandSparkles, FaLeaf } from "react-icons/fa";
import Image from "next/image";

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
            <p className="text-lg text-gray-700 leading-relaxed">
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
              src="/about/mision.png"
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
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser una empresa líder en Lima y referente en Perú, reconocida por
              transformar el acto de regalar en un momento extraordinario,
              innovador y con compromiso ecofriendly.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/about/vision.png"
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
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Desde la fundación de Emozziona en el año 2022, teníamos una idea
          clara: un regalo es mucho más que un objeto. Regalar es un gesto que
          genera emociones, como sonrisas, abrazos y recuerdos que perduran.
          Nacimos con el propósito de emocionar a las personas, combinando la
          calidad, creatividad y un estilo auténtico, dejando una huella
          positiva en el mundo.
        </p>
      </section>

      {/* Propuesta Única de Valor */}
      <section className="bg-gray-50 py-12 px-6 rounded-2xl shadow-inner">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#13294b] mb-12">
          Propuesta Única de Valor
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-3">
              {/* <Gift className="text-[#13294b] w-6 h-6 mt-1" /> */}
              <div>
                <div className="flex flex-row items-center gap-x-1.5">
                  <FaGift size={36} />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Regalos Funcionales con Estilo y Calidad
                  </h3>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Ofrecemos regalos que combinan utilidad y elegancia, perfectos
                  para personas que valoran la calidad y los detalles.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-3">
              {/* <Handshake className="text-[#13294b] w-6 h-6 mt-1" /> */}
              <div>
                <div className="flex flex-row items-center gap-x-1.5">
                  <FaHandshake size={36} />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Asesoría Personalizada
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Desde la idea hasta la entrega, te asesoramos para que
                  encuentres el regalo ideal que refuerce la relación con tus
                  clientes y colaboradores.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-3">
              {/* <Sparkles className="text-[#13294b] w-6 h-6 mt-1" /> */}
              <div>
                <div className="flex flex-row items-center gap-x-1.5">
                  <FaHandSparkles size={36} />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Regalos Innovadores
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Si buscas algo diferente, tenemos opciones creativas para
                  destacar y dejar huella.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-3">
              {/* <Leaf className="text-[#13294b] w-6 h-6 mt-1" /> */}
              <div>
                <div className="flex flex-row items-center gap-x-1.5">
                  <FaLeaf size={36} />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Sostenibilidad
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Cuidamos al planeta con prácticas ecofriendly y empaques
                  responsables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
