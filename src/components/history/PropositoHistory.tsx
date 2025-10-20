export const PropositoHistory = () => {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-6">

        {/* Estadísticas inferiores */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-[#0F172A] text-white py-4 px-8 rounded-xl text-center">
            <p className="text-2xl font-bold">+1000</p>
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
