import Image from "next/image";
import { Metadata } from "next";
import { AboutPageSchema, BreadcrumbSchema } from "@/components";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description: "Conoce la historia de Emozziona y cómo Justina Martínez transformó la industria de regalos corporativos. Dos años creando experiencias memorables con diseño intencional y maestría en el detalle.",
  keywords: ["historia emozziona", "justina martinez", "fundadora emozziona", "regalos memorables", "packaging premium"],
  openGraph: {
    title: "Historia de Emozziona | Transformando Regalos en Recuerdos",
    description: "Descubre cómo Justina Martínez fundó Emozziona para transformar regalos corporativos en experiencias memorables con diseño y propósito.",
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
    { name: 'Inicio', url: 'https://emozziona.com' },
    { name: 'Historia', url: 'https://emozziona.com/history' },
  ];

  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <section className="bg-white text-gray-800 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#C2878D]">
          HISTORIA EMOZZIONA
        </h1>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#D6A692] mb-4">
              EMOZZIONA: Transformando Regalos en Recuerdos con Detalle y Propósito
            </h2>
            <p className="mb-4">
              Hace dos años, Justina Martínez, tuvo una revelación: en un mundo
              lleno de objetos funcionales y comerciales, los regalos habían
              perdido su magia. Se habían convertido en una simple transacción,
              un artículo que se recibe, no un recuerdo que se atesora.
            </p>
            <p className="mb-6">
              Ella creía firmemente que un regalo tiene el poder de comunicar
              más que mil palabras: gratitud, compromiso, y una profunda
              conexión.
            </p>
            <blockquote className="border-l-4 border-[#D6A692] pl-4 py-2 mb-6 italic">
              “Cada vez que regalaba algo, sentía que faltaba ese toque
              personal, ese ‘algo’ que hiciera que la otra persona sintiera que
              ese objeto había sido pensado solo para ella.” –{" "}
              <span className="font-semibold">Justina Martínez, Fundadora de EMOZZIONA.</span>
            </blockquote>
            <p className="mb-4">
              Así nació EMOZZIONA. No fue creada para vender merchandising, sino
              para solucionar un problema emocional: la falta de memoria en el
              mundo corporativo y personal.
            </p>
            <p className="font-bold text-[#C2878D] mb-6">
              Desde el primer día, nuestra misión fue clara y radical: Hacer que
              cada regalo sea memorable.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
              <Image
                src={'/hisstory/duenia.jpeg'}
                alt="foto de  Justina Martinez"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#D6A692] mb-4 text-center">
            ¿Cómo garantizamos un regalo que genera ventas y lealtad?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-[#C2878D] mb-2">Diseño con Intención</h4>
              <p>
                No es solo un logo impreso; es entender la historia de tu marca
                y plasmarla en un objeto útil y hermoso que genera afinidad con
                quien lo recibe.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-[#C2878D] mb-2">
                La Maestría del Detalle (Nuestro Diferenciador)
              </h4>
              <p>
                La fundadora pone un enfoque obsesivo en el packaging y la
                presentación. Cada pack de regalo se arma con un detalle
                minucioso para elevar la experiencia. El receptor debe sentir
                que abrió algo realmente especial. Este detalle es lo que
                traduce tu inversión en un &quot;WOW&quot; inmediato y una recomendación
                futura.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-[#C2878D] mb-2">
                Compromiso con la Emoción
              </h4>
              <p>
                Nos centramos en el efecto que queremos causar. Cuando eliges
                EMOZZIONA, no estás comprando una agenda o un termo, estás
                invirtiendo en un momento de alegría, gratitud o motivación
                para tu equipo o tus clientes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-[#C2878D] mb-2">
                Calidad que Demuestra Valor
              </h4>
              <p>
                Entendemos que un regalo corporativo de alta calidad es una
                extensión del prestigio de tu empresa. Por eso, garantizamos
                que cada producto refuerce la confianza y la coherencia de tu
                marca.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4">
            Hoy, dos años después, EMOZZIONA se ha convertido en el socio ideal
            para empresas que, como la tuya, saben que la verdadera conexión se
            construye a través de los detalles. Estamos aquí para asegurar que
            tu próximo regalo no sea solo entregado, sino recordado y
            presumido.
          </p>
          <p className="font-semibold text-lg text-[#C2878D]">
            Únete a las empresas que han decidido dejar una marca imborrable.
            Empecemos a crear tu próximo recuerdo memorable.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}