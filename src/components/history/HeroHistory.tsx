import { arimo, trajan } from "@/lib/fonts";
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
            className={`text-center mt-4 text-lg md:text-xl text-gray-600 ${trajan.className}`}
          >
            Donde un detalle se vuelve un recuerdo
          </p>
        </div>
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h1
            className={`text-4xl md:text-6xl text-primary font-semibold ${trajan.className}`}
          >
            Nuestra historia: <br />
            <span className="italic text-3xl md:text-5xl">
              Pasion por el detalle
            </span>
          </h1>
          <p className={`mt-4 text-base md:text-lg text-primary ${arimo.className}`}>
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
              2021
            </h3>
            <h4
              className={`text-xl font-semibold text-secondary mb-3 ${arimo.className}`}
            >
              La idea nace
            </h4>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-gray-700">
                Hace dos años, Justina Martinez, fundadora de{" "}
                <span className="font-bold">Emozziona</span>, tuvo una
                revelacion; en un mundo lleno de obsequios funcionales, sentia
                que los regalos habian perdido su magia.
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
                "Sentia que faltaba ese toque personal, ese algo que hiciera que
                la otra persona sintiera que el obsequio habia sido pensado solo
                para ella/el."
              </p>
              <h2 className="mt-4 text-sm font-semibold text-gray-800">
                Justina Martinez <br />{" "}
                <span className="font-normal">Fundadora de EMOZZIONA</span>
              </h2>
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
                Crear experiencias memorables era nuestra nueva mision: hacer
                que cada reagalo fortaleciera los lazos con gratitud, cuidado y
                una conexion unica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
