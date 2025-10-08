import { montserrat, trajan } from "@/lib/fonts";
import Image from "next/image";

const products = [
  { src: "/home/1.png", alt: "Producto 1" },
  { src: "/home/2.png", alt: "Producto 2" },
  { src: "/home/3.png", alt: "Producto 3" },
  { src: "/home/4.png", alt: "Producto 4" },
  { src: "/home/5.png", alt: "Producto 5" },
  { src: "/home/6.png", alt: "Producto 6" },
  { src: "/home/7.png", alt: "Producto 7" },
  { src: "/home/8.png", alt: "Producto 8" },
];

export const Product = () => {
  return (
    <section
      className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8"
      id="productos"
    >
      <h2
        className={`text-3xl sm:text-4xl text-center text-primary font-semibold ${montserrat.className}`}
      >
        Productos
      </h2>
      <p className={`text-sm sm:text-base text-center text-marron font-semibold mt-2 ${trajan.className}`}>
        Descubre nuestros productos más populares
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={product.src}
              alt={product.alt}
              width={500}
              height={500}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Ver Producto</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
