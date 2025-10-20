import Image from "next/image";
import { montserrat, popping } from "@/lib/fonts";

interface ITemporalLine {
  year: string;
  title: string;
  description: string;
}

export const HeroHistory = () => {
  const temporalLine: ITemporalLine[] = [
    {
      year: "2022",
      title: "Volver al sentido del regalo",
      description: `
    Descubrimos que muchos regalos se habían convertido en simples transacciones. 
    Decidimos volver a lo esencial: crear detalles que transmitan emoción, 
    que hagan sentir a quien los recibe que el obsequio fue pensado 
    y creado especialmente para esa persona.
  `,
    },
    {
      year: "2023",
      title: "Del detalle a la experiencia",
      description: `
    Diseñamos un proceso que va más allá del objeto: 
    seleccionamos piezas útiles, mensajes con propósito y empaques 
    que despiertan un auténtico efecto “wow”. 
    Gracias a ello, las primeras empresas de gran trayectoria 
    confiaron en nosotros para expresar sus emociones a través de regalos.
  `,
    },
    {
      year: "2024",
      title: "Recuerdos que perduran",
      description: `
    Perfeccionamos la experiencia completa: 
    desde la historia detrás de cada pieza hasta un embalaje memorable 
    y coherente con la esencia de cada marca. 
    Hoy seguimos creando momentos y recuerdos que perduran en el tiempo.
  `,
    },
  ];

  return (
    <section className="w-full py-20 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Columna de la imagen y bienvenida */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <Image
              src="/hisstory/duenia.jpeg"
              alt="Fundadora de Emozziona"
              width={700}
              height={700}
              className="rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-8 -right-8 bg-secondary/80 backdrop-blur-sm text-white p-6 rounded-2xl shadow-lg">
              <p className={`text-lg font-semibold ${popping.className}`}>
                ¡Hola, soy Justina Martinez!
              </p>
              <p className={`text-sm ${popping.className}`}>Fundadora de <strong>Emozziona</strong></p>
            </div>
          </div>
        </div>

        {/* Columna de la línea de tiempo */}
        <div className="text-primary">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-10 text-center md:text-left ${montserrat.className}`}
          >
            Nuestra <br />
            <span className="italic font-extrabold text-secondary drop-shadow-md">Historia</span>
          </h2>

          <p className={`text-lg text-gray-700 mb-12 text-center md:text-left ${popping.className}`}>
            En Emozziona creemos que un detalle puede decir más que mil palabras,
            un regalo tiene el poder de generar emociones y una profunda conexión.
          </p>

          <div className="relative border-l-4 border-secondary/50 pl-8 space-y-12">
            {temporalLine.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-10 -top-1.5 h-5 w-5 rounded-full bg-secondary shadow-md"></div>
                <h3 className={`text-2xl font-bold text-secondary ${montserrat.className}`}>{item.year}</h3>
                <h4 className={`text-xl font-semibold mt-2 mb-3 font-tthove`}>{item.title}</h4>
                <p className={`text-base text-gray-600 leading-relaxed ${popping.className}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};