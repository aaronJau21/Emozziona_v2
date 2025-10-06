export const Title = () => {
  return (
    <section className="text-center mb-16 mt-12 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13294b]/5 to-transparent opacity-30" />

      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          💝 Más que regalos, creamos conexiones
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#13294b] to-blue-400 mx-auto my-4 rounded-full" />
        <p className="mt-3 text-lg text-gray-600 italic">
          Cada detalle cuenta una historia, cada obsequio deja huella.
        </p>
      </div>
    </section>
  );
};
