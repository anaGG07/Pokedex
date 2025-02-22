const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// Configuración de todas las rutas de la API
export const API_ROUTES = {
  AUTH: {
    REGISTER: `${API_BASE_URL}/users/register`, 
    LOGIN: `${API_BASE_URL}/users/login`, 
    PROFILE: (userId) => `${API_BASE_URL}/users/${userId}`, 
    USERS: `${API_BASE_URL}/users/allUsers`, 
    FAVORITES: `${API_BASE_URL}/users/favorites`, 
    FAVORITES_RANKING: `${API_BASE_URL}/users/favorites/ranking`, 


    ADD_TO_FAVORITES: (pokemonName) =>
      `${API_BASE_URL}/users/favorite/${pokemonName.toLowerCase()}`, 
    REMOVE_FROM_FAVORITES: (pokemonName) =>
      `${API_BASE_URL}/users/favorite/${pokemonName.toLowerCase()}`, 
  },

  POKEMONS: {
    LIST: `${API_BASE_URL}/pokemons`, 
    GET_ONE: (name) => `${API_BASE_URL}/pokemons/${name.toLowerCase()}`, 
    FETCH: `${API_BASE_URL}/pokemons/fetch`, 
  },
};
