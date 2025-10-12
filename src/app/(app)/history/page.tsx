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
        </div>
      </section>
    </>
  );
}
