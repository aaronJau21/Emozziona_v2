import { Metadata } from "next";
import { AboutPageSchema, BreadcrumbSchema, HeroHistory } from "@/components";

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

      {/* HERO / INTRO */}
      <HeroHistory />

      {/* VALUE PROPOSITION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestra Garantía: Regalos que Dejan Huella
            </h2>
            <p className="text-lg text-gray-600">
              Más que productos, creamos experiencias. Así es como aseguramos
              que cada regalo genere recordación y lealtad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-50 p-8 rounded-2xl shadow-sm ring-1 ring-primary/10 hover:shadow-lg hover:ring-primary/20 transition-all duration-300">
              <h3 className="font-semibold text-xl text-primary mb-3 flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
                Diseño con Intención
              </h3>
              <p className="text-gray-700">
                No es solo un logo impreso; es entender la historia de tu marca
                y plasmarla en un objeto útil y hermoso que genera afinidad con
                quien lo recibe.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 p-8 rounded-2xl shadow-sm ring-1 ring-primary/10 hover:shadow-lg hover:ring-primary/20 transition-all duration-300">
              <h3 className="font-semibold text-xl text-primary mb-3 flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
                Maestría en el Detalle
              </h3>
              <p className="text-gray-700">
                Nuestra obsesión por el packaging y la presentación asegura una
                experiencia inolvidable. Cada detalle está pensado para traducir
                tu inversión en un {"WOW"} inmediato.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 p-8 rounded-2xl shadow-sm ring-1 ring-primary/10 hover:shadow-lg hover:ring-primary/20 transition-all duration-300">
              <h3 className="font-semibold text-xl text-primary mb-3 flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
                Compromiso Emocional
              </h3>
              <p className="text-gray-700">
                No vendemos productos, invertimos en momentos de alegría,
                gratitud y motivación para tu equipo y clientes. El efecto
                emocional es nuestro principal objetivo.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-gray-50 p-8 rounded-2xl shadow-sm ring-1 ring-primary/10 hover:shadow-lg hover:ring-primary/20 transition-all duration-300">
              <h3 className="font-semibold text-xl text-primary mb-3 flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
                Calidad que Inspira Confianza
              </h3>
              <p className="text-gray-700">
                Un regalo de alta calidad es una extensión del prestigio de tu
                empresa. Garantizamos que cada producto refuerce la confianza y
                coherencia de tu marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deja una Marca Imborrable
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-95">
            Hoy, EMOZZIONA es el socio ideal para empresas que, como la tuya,
            saben que la verdadera conexión se construye a través de los
            detalles. Asegura que tu próximo regalo no solo sea entregado, sino
            recordado y presumido.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-8 rounded-full text-lg shadow-sm ring-1 ring-white/20 hover:shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Crear un Recuerdo Memorable
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-7.22 7.22a.75.75 0 1 1-1.06-1.06l7.22-7.22h-3.44a.75.75 0 0 1-.75-.75Z" />
              <path d="M5.25 6.75a3 3 0 0 0-3 3v9A3 3 0 0 0 5.25 21h9a3 3 0 0 0 3-3v-3a.75.75 0 0 0-1.5 0v3c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
