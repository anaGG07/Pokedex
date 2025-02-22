import React from "react";

const AboutPage = () => {
  return (
    <div
      className="p-8 max-w-4xl mt-10 mb-10 mx-auto bg-[#151515]/80 rounded-2xl 
      shadow-[20px_20px_30px_-10px_rgba(0,0,0,0.6),-4px_-4px_10px_-4px_rgba(255,255,255,0.05)]
      space-y-8"
    >
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
        ¡Bienvenido a la Pokédex!
      </h1>

      <p className="text-gray-300 text-lg text-center leading-relaxed">
        Explora, busca y guarda tus Pokémon favoritos con una experiencia
        interactiva y atractiva. Esta aplicación no solo te permite visualizar
        estadísticas y habilidades, sino que también incluye un sistema de
        favoritos y un ranking dinámico basado en la comunidad.
      </p>

      <div
        className="p-6 rounded-xl bg-[#1a1a1a]
        shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
      >
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4">
          Tecnologías Utilizadas
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-3">
            <span className="text-2xl">⚛️</span>
            <span>React.js con Vite y React Router</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🌐</span>
            <span>Node.js y Express para el backend</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <span>MongoDB con Mongoose para almacenamiento de datos</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🎨</span>
            <span>TailwindCSS para el diseño neumórfico</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🔄</span>
            <span>
              Context API para gestión de estado y ranking en tiempo real
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🔔</span>
            <span>Sonner para notificaciones interactivas</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🔗</span>
            <span>PokeAPI para obtener datos en tiempo real</span>
          </li>
        </ul>
      </div>

      <div
        className="p-6 rounded-xl bg-[#1a1a1a]
        shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
      >
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4">
          Características Destacadas
        </h2>
        <ul className="space-y-3 text-gray-300 list-disc pl-6">
          <li>🔍 Búsqueda de Pokémon por nombre.</li>
          <li>⭐ Añadir y gestionar una lista de Pokémon favoritos.</li>
          <li>📊 Ranking en tiempo real con los Pokémon más populares.</li>
          <li>🔐 Autenticación con JWT para usuarios registrados.</li>
          <li>🛡️ Protección de rutas para usuarios autenticados.</li>
          <li>🔄 Actualización automática del ranking de favoritos.</li>
        </ul>
      </div>

      <div className="text-center mt-8 relative">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
          className="w-40 h-40 mx-auto"
        />
        <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full scale-75 -z-10"></div>
        <p className="text-lg text-gray-400 font-medium">¡Hazte con todos!</p>
      </div>
    </div>
  );
};

export default AboutPage;
