import React from "react";

export const MainAbout = () => {
  return (
    <main className="space-y-12 max-w-7xl mx-auto mb-16">
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-primary pb-2">
          Nuestra Misión
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Nuestra misión es brindar experiencias memorables a través de regalos
          de calidad que transmitan gratitud, cercanía y valor en cada detalle.
          Buscamos fortalecer las relaciones entre empresas, colaboradores y
          clientes, creando momentos únicos para celebrar, disfrutar y conectar
          de manera auténtica y con conciencia ambiental.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-primary pb-2">
          Nuestra Visión
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Ser una empresa líder en Lima y referente en Perú, reconocida por
          transformar el acto de regalar en un momento extraordinario, innovador
          y con compromiso ecofriendredly.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 border-b-2 border-primary pb-2">
          Nuestra Filosofía
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Desde la fundación de Emozziona en el año 2022, teníamos una idea
          clara: un regalo es mucho más que un objeto. Regalar es un gesto que
          genera emociones, como sonrisas, abrazos y recuerdos que perduran.
          Nacimos con el propósito de emocionar a las personas, combinando la
          calidad, creatividad y un estilo auténtico, dejando una huella
          positiva en el mundo.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Propuesta Única de Valor
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">
              Regalos Funcionales con Estilo y Calidad
            </h3>
            <p className="text-gray-700">
              Ofrecemos regalos que combinan utilidad y elegancia, perfectos
              para personas que valoran la calidad y los detalles.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">
              Asesoría Personalizada
            </h3>
            <p className="text-gray-700">
              Desde la idea hasta la entrega, te asesoramos para que encuentres
              el regalo ideal que refuerce la relación con tus clientes y
              colaboradores.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">
              Regalos Innovadores
            </h3>
            <p className="text-gray-700">
              Si buscas algo diferente, tenemos opciones creativas para destacar
              y dejar huella.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">
              Sostenibilidad
            </h3>
            <p className="text-gray-700">
              Cuidamos al planeta con prácticas ecofriendly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
