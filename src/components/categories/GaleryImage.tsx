import Image from "next/image";
import { allImages } from "./dataImage";

export const GaleryImage = () => {
  return (
    <main className="max-w-7xl mx-auto">
      {allImages.map((image) => (
        <div key={image.name} className="my-16">
          <h2 className="text-3xl font-bold text-primary">{image.name}</h2>
          <div className="grid grid-cols-4 gap-5 my-5">
            {image.category.map((img) => (
              <div key={img.nombre}>
                <div className="group relative overflow-hidden rounded-4xl shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl border-8 border-white">
                  <Image
                    src={img.img}
                    alt={`Producto de Emozziona ${img.nombre}`}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-center px-3">
                      {img.reconocimiento}
                    </p>
                  </div>
                </div>
                <p className="text-xl pt-3 font-semibold text-primary text-center">
                  {img.nombre}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};
