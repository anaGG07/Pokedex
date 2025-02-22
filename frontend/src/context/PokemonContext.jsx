import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { API_ROUTES } from "../config/apiRoutes";

// Creación del contexto
const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token")); // <-- Mantener el token actualizado

  // Escuchar cambios en el token de localStorage (para actualizar después del login/logout)
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("token");
      setToken(updatedToken);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Cargar los favoritos desde la base de datos al inicio o cuando cambie el token
  useEffect(() => {
    const fetchFavoritesFromDB = async () => {
      if (!token) return;

      try {
        const response = await fetch(API_ROUTES.AUTH.FAVORITES, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error al obtener favoritos:", errorText);
          throw new Error("Error al obtener los favoritos");
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setFavorites(data);
        }
      } catch (error) {
        console.error("Error cargando favoritos:", error);
      }
    };

    fetchFavoritesFromDB();
  }, [token]); // <--- Cuando el token cambia, se vuelven a cargar los favoritos

  // Añadir Pokémon a favoritos (Base de datos + visual)
  const addToFavorites = async (pokemon) => {
    if (
      favorites.some(
        (p) =>
          p?.pokemonId === pokemon.pokemonId ||
          p?._id === pokemon._id ||
          p.name === pokemon.name
      )
    ) {
      toast.error(`El Pokémon ${pokemon.name} ya está en favoritos`, {
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

      return;
    }

    try {
      const response = await fetch(
        API_ROUTES.AUTH.ADD_TO_FAVORITES(pokemon.name),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(pokemon),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error al añadir a favoritos:", errorText);
        throw new Error("Error al añadir el Pokémon a favoritos");
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const { pokemon: addedPokemon } = await response.json(); // Ajuste aquí
        setFavorites((prevFavorites) => [...prevFavorites, addedPokemon]);

        toast.success(`Pokémon ${pokemon.name} añadido a favoritos`, {
          style: {
            background: "#151515",
            color: "#fff", 
            borderRadius: "10px", 
            padding: "16px",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow:
              "inset -4px -4px 8px rgba(255,255,255,0.05), inset 4px 4px 8px rgba(0,0,0,0.6), 4px 4px 10px rgba(0,0,0,0.8)", 
            border: "1px solid rgba(255, 255, 255, 0.1)", 
          },
          icon: "⭐",
        });

      }
    } catch (error) {
      console.error("Error al añadir a favoritos:", error);
      toast.error(`Error al añadir ${pokemon.name} a favoritos`, {
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

  // Eliminar Pokémon de favoritos (Base de datos + visual)
  const removeFromFavorites = async (pokemonName) => {
    try {
      const response = await fetch(
        API_ROUTES.AUTH.REMOVE_FROM_FAVORITES(pokemonName),
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error al eliminar de favoritos:", errorText);
        throw new Error("Error al eliminar el Pokémon de favoritos");
      }

      setFavorites((prevFavorites) =>
        prevFavorites.filter((p) => p.name !== pokemonName)
      );

      toast.info(`Pokémon ${pokemonName} eliminado de favoritos`, {
        style: {
          background: "#151515",
          color: "#5a9bff", 
          borderRadius: "10px",
          padding: "16px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow:
            "inset -4px -4px 8px rgba(255,255,255,0.05), inset 4px 4px 8px rgba(0,0,0,0.6), 4px 4px 10px rgba(0,0,0,0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        icon: "🗑️",
      });

    } catch (error) {
      console.error("Error al eliminar de favoritos:", error);
      toast.error("Error al eliminar el Pokémon de favoritos");
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        token,
        setToken,
      }}
    >
      <div className="min-h-screen bg-[#363f44] text-[#efcb69]">{children}</div>
    </PokemonContext.Provider>
  );
}

// Hook para consumir el contexto
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon debe ser usado dentro de un PokemonProvider");
  }
  return context;
};


