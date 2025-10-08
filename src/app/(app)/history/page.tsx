import Image from "next/image";
import { Metadata } from "next";
import { AboutPageSchema, BreadcrumbSchema } from "@/components";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "Conoce la historia de Emozziona y cómo Justina Martínez transformó la industria de regalos corporativos. Dos años creando experiencias memorables con diseño intencional y maestría en el detalle.",
  keywords: [
    "historia emozziona",
    "justina martinez",
    "fundadora emozziona",
    "regalos memorables",
    "packaging premium",
  ],
  openGraph: {
    title: "Historia de Emozziona | Transformando Regalos en Recuerdos",
    description:
      "Descubre cómo Justina Martínez fundó Emozziona para transformar regalos corporativos en experiencias memorables con diseño y propósito.",
    images: [
      {
        url: "/hisstory/duenia.jpeg",
        width: 1200,
        height: 630,
        alt: "Justina Martínez - Fundadora de Emozziona",
      },
    ],
  },
};

export default function HistoryPage() {
  const breadcrumbItems = [
    { name: "Inicio", url: "https://emozziona.com" },
    { name: "Historia", url: "https://emozziona.com/history" },
  ];

  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="bg-gray-50 text-gray-800 pt-16 md:pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestra Historia: Pasión por el Detalle
            </h1>
            <p className="text-lg text-gray-600">
              Descubre cómo Emozziona nació de la visión de una mujer que quiso
              devolverle el alma a los regalos.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-semibold text-[#C2878D] mb-6">
                De la idea a la acción: Un viaje de propósito
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Hace dos años, Justina Martínez, fundadora de Emozziona, tuvo
                  una revelación: en un mundo lleno de objetos funcionales, los
                  regalos habían perdido su magia. Se habían convertido en una
                  simple transacción, no en un recuerdo que se atesora.
                </p>
                <p>
                  Ella creía firmemente que un regalo tiene el poder de
                  comunicar más que mil palabras: gratitud, compromiso y una
                  profunda conexión.
                </p>
                <blockquote className="border-l-4 border-[#D6A692] pl-6 py-3 text-lg italic text-gray-600 bg-white rounded-r-lg">
                  “Sentía que faltaba ese toque personal, ese ‘algo’ que hiciera
                  que la otra persona sintiera que ese objeto había sido pensado
                  solo para ella.”
                  <cite className="block font-semibold mt-4 not-italic">
                    – Justina Martínez, Fundadora de EMOZZIONA
                  </cite>
                </blockquote>
                <p>
                  Así nació EMOZZIONA. No para vender merchandising, sino para
                  solucionar un problema emocional: la falta de memoria en el
                  mundo corporativo y personal.
                </p>
                <p className="font-bold text-[#C2878D] text-xl">
                  Nuestra misión: Hacer que cada regalo sea memorable.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-80 h-80">
                <Image
                  src={"/hisstory/duenia.jpeg"}
                  alt="Justina Martinez, fundadora de Emozziona"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestra Garantía: Regalos que Dejan Huella
              </h2>
              <p className="text-lg text-gray-600">
                Más que productos, creamos experiencias. Así es como aseguramos
                que cada regalo genere recordación y lealtad.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-xl text-[#C2878D] mb-3">
                  Diseño con Intención
                </h3>
                <p className="text-gray-700">
                  No es solo un logo impreso; es entender la historia de tu
                  marca y plasmarla en un objeto útil y hermoso que genera
                  afinidad con quien lo recibe.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-xl text-[#C2878D] mb-3">
                  Maestría en el Detalle
                </h3>
                <p className="text-gray-700">
                  Nuestra obsesión por el packaging y la presentación asegura
                  una experiencia inolvidable. Cada detalle está pensado para
                  traducir tu inversión en un "WOW" inmediato.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-xl text-[#C2878D] mb-3">
                  Compromiso Emocional
                </h3>
                <p className="text-gray-700">
                  No vendemos productos, invertimos en momentos de alegría,
                  gratitud y motivación para tu equipo y clientes. El efecto
                  emocional es nuestro principal objetivo.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-xl text-[#C2878D] mb-3">
                  Calidad que Inspira Confianza
                </h3>
                <p className="text-gray-700">
                  Un regalo de alta calidad es una extensión del prestigio de tu
                  empresa. Garantizamos que cada producto refuerce la confianza
                  y coherencia de tu marca.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-secondary text-white pt-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deja una Marca Imborrable
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Hoy, EMOZZIONA es el socio ideal para empresas que, como la tuya,
              saben que la verdadera conexión se construye a través de los
              detalles. Asegura que tu próximo regalo no solo sea entregado,
              sino recordado y presumido.
            </p>
            <a
              href="/contact"
              className="bg-white text-[#C2878D] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Crear un Recuerdo Memorable
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
