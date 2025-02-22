import { useLoaderData, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const PokemonDetailPage = () => {
  const pokemon = useLoaderData();
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } = usePokemon();

  // Verificar si el Pokémon ya está en favoritos
  const isFavorite = favorites.some(
    (fav) => fav.pokemonId === pokemon.pokemonId || fav.name === pokemon.name
  );

  return (
    <div className="container mx-auto p-4 bg-[#0a0a0a]">
      <div
        className="max-w-2xl mx-auto bg-[#151515]/80 rounded-2xl 
        shadow-[35px_35px_60px_-15px_rgba(0,0,0,0.5),-8px_-8px_20px_-8px_rgba(255,255,255,0.05)]
        border border-gray-800/50 p-8"
      >
        <button
          className="mb-6 text-red-500 cursor-pointer hover:text-red-400 transition-colors duration-300 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          ← Volver
        </button>

        
        <div className="w-60 h-60 mx-auto mb-8 rounded-2xl">
          <img
            src={
              pokemon.sprites?.other?.dream_world?.front_default ||
              pokemon.img ||
              "https://via.placeholder.com/150"
            }
            alt={pokemon.name}
            className="w-full h-full"
          />
        </div>

        <h1
          className="text-4xl font-bold text-center capitalize mb-8
          bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          {pokemon.name}
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div
            className="p-4 rounded-xl bg-[#1a1a1a]
            shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Estadísticas
            </h2>
            {pokemon.stats?.map((stat) => (
              <div key={stat.stat.name} className="mb-2">
                <span className="font-medium capitalize text-gray-300">
                  {stat.stat.name}:{" "}
                  <span className="text-red-500">{stat.base_stat}</span>
                </span>
              </div>
            )) || (
              <p className="text-gray-400">No hay estadísticas disponibles</p>
            )}
          </div>

          <div
            className="p-4 rounded-xl bg-[#1a1a1a]
            shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Tipos
            </h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.types?.map((type) => (
                <span
                  key={type.type?.name || type}
                  className="bg-[#252525] rounded-lg px-4 py-2 text-sm font-medium text-gray-300
                    shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_2px_rgba(255,255,255,0.05)]"
                >
                  {type.type?.name || type}
                </span>
              )) || <p className="text-gray-400">No hay tipos disponibles</p>}
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            isFavorite
              ? removeFromFavorites(pokemon.name)
              : addToFavorites(pokemon)
          }
          className={`w-full mt-8 font-bold px-6 py-4 rounded-xl transition-all duration-300 transform ${
            isFavorite
              ? "bg-[#963b3b60] text-gray-300 hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
              : "bg-gradient-to-br from-red-800 to-red-900 text-gray-200 hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
          }`}
        >
          {isFavorite ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
        </button>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
