import { Metadata } from "next";
import { AboutPageSchema, BreadcrumbSchema, HeroHistory } from "@/components";
import { PropositoHistory } from "@/components/history/PropositoHistory";

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
      <PropositoHistory />

      {/* CTA */}
      <section className="text-primary py-16 md:py-24">
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
