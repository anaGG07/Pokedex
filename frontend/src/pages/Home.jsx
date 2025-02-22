import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { usePokemon } from "../context/PokemonContext";
import { API_ROUTES } from "../config/apiRoutes";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favorites, addToFavorites, removeFromFavorites } = usePokemon(); // ✅ Importamos removeFromFavorites

  // Estado para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPage = 20;

  useEffect(() => {
    const populateAndFetchPokemons = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(API_ROUTES.POKEMONS.LIST);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        if (data.length === 0) {
          console.warn(
            "⚠️ La base de datos está vacía, iniciando población..."
          );
          const fetchResponse = await fetch(API_ROUTES.POKEMONS.FETCH);
          if (!fetchResponse.ok)
            throw new Error(
              `Error populating database! status: ${fetchResponse.status}`
            );

          const newResponse = await fetch(API_ROUTES.POKEMONS.LIST);
          if (!newResponse.ok)
            throw new Error(`HTTP error! status: ${newResponse.status}`);

          const newData = await newResponse.json();
          setPokemons(newData);
        } else {
          setPokemons(data);
        }
      } catch (error) {
        console.error("❌ Error en la carga de datos:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    populateAndFetchPokemons();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );

  // Cálculo de paginación
  const totalPages = Math.ceil(pokemons.length / itemsPage);
  const indexOfLastItem = currentPage * itemsPage;
  const indexOfFirstItem = indexOfLastItem - itemsPage;
  const currentPokemons = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto mt-10 p-6">
      {/* Grid con Pokémon */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPokemons.map((pokemon) => {
          const isFavorite = favorites.some(
            (fav) =>
              fav.pokemonId === pokemon.pokemonId || fav.name === pokemon.name
          );

          return (
            <div
              key={pokemon._id || pokemon.id}
              className="bg-[#151515] rounded-2xl p-6 
              shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.02)]
              hover:shadow-[12px_12px_20px_rgba(0,0,0,0.7),-4px_-4px_10px_rgba(255,255,255,0.05)]
              transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Imagen */}
              <img
                src={
                  pokemon.img ||
                  pokemon.sprites?.other?.dream_world?.front_default
                }
                alt={pokemon.name}
                className="w-32 h-32 mx-auto drop-shadow-[4px_4px_5px_rgba(0,0,0,0.6)]"
              />

              {/* Nombre */}
              <h2
                className="text-2xl font-extrabold text-center capitalize mt-4 
                bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
              >
                {pokemon.name}
              </h2>

              {/* Tipos */}
              <div className="flex justify-center gap-2 mt-4 mb-4">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type?.name || type}
                    className="inline-block px-6 py-3 pb-4 text-sm font-semibold text-gray-300 
                    rounded-xl bg-[#1a1a1a] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_rgba(0,0,0,0.8)]"
                  >
                    {type.type?.name || type}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex justify-center gap-4 mt-6">
                {/* Botón Añadir/Eliminar */}
                <button
                  onClick={() =>
                    isFavorite
                      ? removeFromFavorites(pokemon.name)
                      : addToFavorites(pokemon)
                  }
                  className={`px-6 py-3 rounded-lg text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    isFavorite
                      ? "bg-[#963b3b60] text-gray-300  hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
                      : "bg-gradient-to-br from-red-800 to-red-900 text-gray-200 hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.8)]"
                  }`}
                >
                  {isFavorite ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
                </button>

                {/* Botón Ver */}
                <Link
                  to={`/search/${pokemon.name}`}
                  className="px-6 py-3 rounded-lg text-gray-200 text-lg font-semibold 
                  bg-gradient-to-br from-[#333333] to-[#242424]
                  hover:shadow-[inset_2px_2px_6px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_rgba(0,0,0,0.8)]
                  transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Ver
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 rounded-lg font-semibold text-gray-300 text-lg transition-all duration-300 transform 
          bg-[#151515] shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>

        <span className="text-lg text-gray-300">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-6 py-3 rounded-lg font-semibold text-gray-300 text-lg transition-all duration-300 transform 
          bg-[#151515] shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
