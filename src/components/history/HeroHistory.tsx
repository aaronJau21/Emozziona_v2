import { arimo, montserrat, popping, trajan } from "@/lib/fonts";
import Image from "next/image";

export const HeroHistory = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 md:my-16 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-2/5 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/hisstory/duenia.jpeg"
              alt="Fundadora de Emozziona"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p
            className={`text-center mt-4 text-lg md:text-2xl text-gray-600 ${trajan.className}`}
          >
            Justina Martinez <br />{" "}
            <span className={`font-normal text-base ${popping.className}`}>
              Fundadora de EMOZZIONA
            </span>
          </p>
        </div>
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h1
            className={`text-4xl md:text-6xl text-primary font-semibold ${montserrat.className}`}
          >
            Mi historia <br />
            <span className={`italic text-xl font-bold`}>
              Transformar el acto de regalar en un momento extraordinario
            </span>
          </h1>
          <p
            className={`mt-4 text-base md:text-lg text-primary ${popping.className} `}
          >
            En Emozziona creemos que un detalle puede decir más que mil
            palabras: gratitud, cercanía y propósito.
          </p>
        </div>
      </div>
      <h2 className="my-16 text-xl italic text-primary">
        Tres hitos que explican cómo convertimos un regalo en un recuerdo.
      </h2>
      <div className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <h3
              className={`text-2xl font-bold text-primary mb-2 ${trajan.className}`}
            >
              2022
            </h3>
            <h4
              className={`text-xl font-semibold text-secondary mb-3 ${arimo.className}`}
            >
              La chispa
            </h4>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-xl font-bold text-primary">
                Volver al sentido del regalo
              </p>
              <p className="text-primary text-lg">
                Descubrimos que muchos regalos se habían vuelto una simple
                transacción. Decidimos crear detalles con significado, pensados
                para la persona que los recibe.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3
              className={`text-2xl font-bold text-primary mb-2 ${trajan.className}`}
            >
              2023
            </h3>
            <h4
              className={`text-xl font-semibold text-secondary mb-3 ${arimo.className}`}
            >
              Del detalle al método
            </h4>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-xl font-bold text-primary">
                Del detalle a la experiencia
              </p>
              <p className="text-primary text-lg">
                Diseñamos un proceso: Elección de piezas útiles, mensajes con
                propósito y empaques que provocan un WOW auténtico. Las primeras
                empresas confiaron en nosotros.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3
              className={`text-2xl font-bold text-primary mb-2 ${trajan.className}`}
            >
              2024
            </h3>
            <h4
              className={`text-xl font-semibold text-secondary mb-3 ${arimo.className}`}
            >
              Propósito que crece
            </h4>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-xl font-bold text-primary">
                Recuerdos que perduran
              </p>
              <p className="text-primary text-lg">
                Perfeccionamos la experiencia completa: desde la historia detrás
                de cada pieza hasta un embalaje memorable y coherente con la
                marca. Hoy seguimos creando recuerdos que perduran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
