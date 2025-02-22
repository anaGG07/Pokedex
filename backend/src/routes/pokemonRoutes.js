import express from "express";
import {
  getPokemons,
  getPokemonByName,
  fetchPokemonsFromAPI,
} from "../controllers/pokemonController.js";


const router = express.Router();

// Rutas para obtener información de Pokémon
router.get("/fetch", fetchPokemonsFromAPI);
router.get("/:name", getPokemonByName);
router.get("/", getPokemons);

export default router;
