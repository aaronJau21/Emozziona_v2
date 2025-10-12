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
            Nuestra historia <br />
            <span className={`italic text-xl font-bold`}>
              Tranformar el acto de regalar a un momento extraordinario
            </span>
          </h1>
          <p
            className={`mt-4 text-base md:text-lg text-primary ${popping.className} `}
          >
            Descubre como Emozziona nacio de la vision de una mujer que quiso
            devolver el alma a los regalos.
          </p>
        </div>
      </div>

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
              La idea nace
            </h4>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-gray-700">
                Hace tres años tuve una revelación: en un mundo lleno de objetos
                funcionales, los regalos habían perdido su magia, se habían
                convertido en una simple transacción y no en un recuerdo que se
                ate. Sentía que faltaba ese toque personal, ese “algo” que
                hiciera que la otra persona sintiera que el obsequio había sido
                pensado y creado solo para ella.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3
              className={`text-2xl font-bold text-primary mb-2 ${trajan.className}`}
            >
              2022
            </h3>
            <h4
              className={`text-xl font-semibold text-secondary mb-3 ${arimo.className}`}
            >
              El detalle toma forma
            </h4>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-gray-700 italic">
                Así nació EMOZZIONA. No para vender merchandising, sino para
                solucionar un problema emocional y la falta de memoria en el
                mundo corporativo y personal. Creemos firmemente que un regalo
                tiene el poder de comunicar más que mil palabras, un regalo
                genera emociones y una profunda conexión Nuestra filosofía
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
              El proposito se multiplica
            </h4>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-gray-700">
                Desde la fundación de Emozziona en el año 2022 teníamos una idea
                clara, que un regalo es mucho más que dar un objeto, regalar es
                un gesto que genera emociones, como sonrisas, abrazos y
                recuerdos que perduran. Nacimos con el propósito de emocionar a
                las personas, combinando la calidad, creatividad y un estilo
                auténtico, dejando una huella positiva en el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
