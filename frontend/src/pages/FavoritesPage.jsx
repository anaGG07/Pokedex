import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { ROUTES } from "../routes/paths";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = usePokemon();

  if (favorites.length === 0) {
    return (
      <div className="text-center flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-400 text-lg">
          No tienes pokémon en favoritos actualmente
        </p>

        <img
          src="https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif"
          alt="Sin favoritos"
          className="mx-auto mt-6 max-w-xs h-auto rounded-xl shadow-lg"
        />

        <Link
          className="mt-8 inline-block text-lg font-semibold  
      text-gray-200 px-6 py-3 rounded-lg 
      bg-[#151515] shadow-[6px_6px_12px_rgba(0,0,0,0.6),-2px_-2px_5px_rgba(255,255,255,0.02)] 
      hover:shadow-[8px_8px_16px_rgba(0,0,0,0.7),-4px_-4px_8px_rgba(255,255,255,0.05)] 
       transition-all duration-300"
          to={ROUTES.HOME}
        >
          Volver a la página de inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-md mb-8">
        Tus Pokémons Favoritos
      </h1>

      {/* Grid con las tarjetas de los pokémons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((pokemon) => (
          <div
            key={pokemon._id || pokemon.pokemonId || pokemon.name}
            className="bg-[#151515] rounded-2xl p-6 
            shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.05)]
            hover:shadow-[12px_12px_20px_rgba(0,0,0,0.7),-4px_-4px_10px_rgba(255,255,255,0.1)]
            transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Imagen del Pokémon */}
            <img
              src={
                pokemon.sprites?.other?.dream_world?.front_default ||
                pokemon.img ||
                "/assets/default-pokemon.png"
              }
              alt={pokemon.name}
              className="w-32 h-32 mx-auto drop-shadow-[4px_4px_10px_rgba(0,0,0,0.6)]"
              onError={(e) => {
                e.target.src = "/assets/default-pokemon.png";
              }}
            />

            {/* Nombre del Pokémon */}
            <h2
              className="text-2xl font-extrabold text-center capitalize mt-4 
            bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-md"
            >
              {pokemon.name}
            </h2>

            {/* Botones de acción */}
            <div className="mt-6 flex flex-col space-y-3">
              <Link
                to={`${ROUTES.SEARCH}/${pokemon.name}`}
                className="px-6 py-3 text-center rounded-lg text-gray-200 text-lg font-semibold 
                bg-[#151515] shadow-[6px_6px_12px_rgba(0,0,0,0.6),-2px_-2px_5px_rgba(255,255,255,0.02)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.7),-4px_-4px_8px_rgba(255,255,255,0.05)] 
                transition-all duration-300 transform"
              >
                Ver Detalles
              </Link>

              <button
                onClick={() => removeFromFavorites(pokemon.name)}
                className="px-6 py-3 text-center rounded-lg text-gray-200 text-lg font-semibold 
                bg-gradient-to-br from-red-800 to-red-900
                shadow-[6px_6px_12px_rgba(0,0,0,0.6),-6px_-6px_12px_rgba(255,255,255,0.05)]
                hover:shadow-[8px_8px_16px_rgba(0,0,0,0.7),-4px_-4px_10px_rgba(255,255,255,0.1)]
                transition-all duration-300 transform hover:-translate-y-1"
              >
                Eliminar de Favoritos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
