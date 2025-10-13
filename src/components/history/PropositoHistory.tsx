export const PropositoHistory = () => {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Pilares que convierten un regalo en un recuerdo
          </h2>
          <p className="text-lg text-gray-600">
            Más que productos, creamos{" "}
            <span className="font-semibold text-gray-800">
              experiencias con propósito.
            </span>{" "}
            Así aseguramos detalles que se sienten, se recuerdan y construyen
            lealtad.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              num: "01",
              title: "Diseño con intención",
              text: "Entendemos la historia de tu marca y la plasmamos en un objeto útil que genera afinidad con quien lo recibe.",
            },
            {
              num: "02",
              title: "Maestría en el detalle",
              text: "Packaging y presentación que provocan un WOW inmediato. Cada capa está pensada para crear experiencia.",
            },
            {
              num: "03",
              title: "Compromiso emocional",
              text: "No vendemos productos: diseñamos momentos de gratitud y cercanía para tu equipo y clientes.",
            },
            {
              num: "04",
              title: "Calidad que inspira confianza",
              text: "Curaduría y control que refuerzan el prestigio de tu marca. Cada pieza es coherente con tus estándares.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
                  {item.num}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Estadísticas inferiores */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-[#0F172A] text-white py-4 px-8 rounded-xl text-center">
            <p className="text-2xl font-bold">+120</p>
            <p className="text-sm text-gray-300">regalos corporativos</p>
          </div>
          <div className="bg-[#0F172A] text-white py-4 px-8 rounded-xl text-center">
            <p className="text-2xl font-bold">98%</p>
            <p className="text-sm text-gray-300">clientes repiten</p>
          </div>
          <div className="bg-[#0F172A] text-white py-4 px-8 rounded-xl text-center">
            <p className="text-2xl font-bold">24–72h</p>
            <p className="text-sm text-gray-300">entregas típicas</p>
          </div>
        </div>
      </div>
    </section>
  );
};
