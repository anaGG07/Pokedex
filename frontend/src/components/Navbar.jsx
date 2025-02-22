import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths";
import { API_ROUTES } from "../config/apiRoutes";

const Navbar = () => {
  // Estado para almacenar el ranking de Pokémon favoritos
  const [ranking, setRanking] = useState([]);

  // Función para salir de la "sesión"
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // Cargar el ranking de Pokémon que mas han sido añadidos a favoritos
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch(API_ROUTES.AUTH.FAVORITES_RANKING);
        if (!response.ok) throw new Error("Error al obtener el ranking");
        const data = await response.json();

        
        if (data.length === 0) {
          setRanking([]);
        } else {
          setRanking(data.slice(0, 3)); // <--- Solo los 3 más populares
        }
      } catch (error) {
        console.error("Error al obtener ranking:", error);
      }
    };

    fetchRanking();
  }, [ranking]);

  return (
    <div className="flex items-center justify-between w-full border-b border-gray-900/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)] px-10 py-6 bg-gradient-to-r from-[#151515] to-[#1a1a1a]">
      {/* Logo */}
      <NavLink
        to={ROUTES.HOME}
        className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
      >
        POKÉDEX
      </NavLink>

      {/* Navegación */}
      <div className="flex gap-10 bg-[#151515] px-10 py-4 rounded-2xl shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.03),inset_4px_4px_8px_rgba(0,0,0,0.8)]">
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => `
            text-2xl font-medium transition-all duration-300 tracking-wide
            ${
              isActive
                ? "font-bold text-red-500"
                : "text-gray-400 hover:text-gray-200 hover:scale-105"
            }
          `}
        >
          Inicio
        </NavLink>

        <NavLink
          to={ROUTES.SEARCH}
          className={({ isActive }) => `
            text-2xl font-medium transition-all duration-300 tracking-wide
            ${
              isActive
                ? "font-bold text-red-500"
                : "text-gray-400 hover:text-gray-200 hover:scale-105"
            }
          `}
        >
          Buscar
        </NavLink>

        <NavLink
          to={ROUTES.FAVORITES}
          className={({ isActive }) => `
            text-2xl font-medium transition-all duration-300 tracking-wide
            ${
              isActive
                ? "font-bold text-red-500"
                : "text-gray-400 hover:text-gray-200 hover:scale-105"
            }
          `}
        >
          Favoritos
        </NavLink>

        <NavLink
          to={ROUTES.ABOUT}
          className={({ isActive }) => `
            text-2xl font-medium transition-all duration-300 tracking-wide
            ${
              isActive
                ? "font-bold text-red-500"
                : "text-gray-400 hover:text-gray-200 hover:scale-105"
            }
          `}
        >
          About
        </NavLink>
      </div>

      {/* Ranking de Pokémon Favoritos */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-red-500 mb-3">
          🔥 Ranking de Favoritos 🔥
        </h2>
        <div className="flex gap-6 mt-2">
          {ranking.length > 0 ? (
            ranking.map((pokemon, index) => (
              <div
                key={pokemon.pokemonId}
                className="relative flex flex-col items-center"
              >
                
                <span className="absolute top-13 text-lg font-bold text-yellow-400 z-1">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                </span>

                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#151515] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.03),inset_-2px_-2px_6px_rgba(0,0,0,0.8)] border border-gray-800 hover:shadow-[0px_0px_10px_rgba(255,255,255,0.5)]">
                  <Link to={`/search/${pokemon.name}`}>
                    <img
                      src={pokemon.img}
                      alt={pokemon.name}
                      className="w-14 h-14 object-contain"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm mt-2">Aún no hay favoritos</p>
          )}
        </div>
      </div>

      {/* Botón Cerrar Sesión */}
      <button
        onClick={handleLogout}
        className="text-2xl font-medium transition-all duration-300 tracking-wide text-gray-400 hover:text-gray-200 hover:scale-105"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Navbar;
