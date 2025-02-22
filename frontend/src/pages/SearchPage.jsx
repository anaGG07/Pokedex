import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { API_ROUTES } from '../config/apiRoutes';

const SearchPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  búsqueda con ombre en la API
    try {
      const response = await fetch(API_ROUTES.POKEMONS.GET_ONE(search));
      if (!response.ok) {
        throw new Error("Pokemon no encontrado");
      }
      // const data = await response.json();
      // console.log(data);
      // navigate(`/pokemon/${data.id}`);
      navigate(`/search/${search.toLocaleLowerCase()}`);
    } catch (error) {
      toast.error(`Pokemon no encontrado`, {
        style: {
          background: "#151515",
          color: "#ff5a5a",
          borderRadius: "10px",
          padding: "16px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow:
            "inset -4px -4px 8px rgba(255,255,255,0.05), inset 4px 4px 8px rgba(0,0,0,0.6), 4px 4px 10px rgba(0,0,0,0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        icon: "⚠️",
      });
    }
  };
return (
  <div className="container mx-auto h-80 p-4 bg-[#111111]">
    <h1 className="text-4xl font-bold mb-10 mt-8 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
      Introduce el nombre del pokémon
    </h1>

    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-10">
      <div
        className="flex gap-4 p-4 rounded-2xl
          bg-[#151515]/80
          shadow-[35px_35px_60px_-15px_rgba(0,0,0,0.5),-8px_-8px_20px_-8px_rgba(255,255,255,0.02)]
          "
      >
        <input
          type="text"
          placeholder="Buscar Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-4 text-gray-200 bg-[#1a1a1a] rounded-xl
              shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]
              focus:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.9)]
              transition-all duration-300 outline-none placeholder-gray-400
               focus:border-gray-700/50"
        />

        <button
          type="submit"
          className="bg-gradient-to-br from-red-800 to-red-900 text-gray-200 px-6 py-4 rounded-xl font-bold
              shadow-[0_0_10px_rgba(220,38,38,0.2),-8px_-8px_16px_rgba(255,255,255,0.02),8px_8px_16px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_15px_rgba(220,38,38,0.3),-10px_-10px_10px_rgba(255,255,255,0.03),10px_10px_10px_rgba(0,0,0,0.5)]
              active:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]
              transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
        >
          Buscar
        </button>
      </div>
    </form>
  </div>
);
};

export default SearchPage;
