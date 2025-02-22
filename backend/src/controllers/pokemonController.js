import Pokemon from "../models/Pokemon.js";
import User from "../models/User.js";

// Obtener todos los Pokémon
const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo Pokémon" });
  }
};

// Poblar/actualizar la BD con datos de la PokeAPI
const fetchPokemonsFromAPI = async (req, res) => {
  try {
    console.log("Obteniendo datos de la PokeAPI...");
    const baseUrl = process.env.POKEAPI_URL;
    const response = await fetch(`${baseUrl}/pokemon?limit=151`);
    const data = await response.json();

    const pokemonBulkOps = data.results.map(async (item) => {
      const pokemonResponse = await fetch(item.url);
      const pokemonData = await pokemonResponse.json();

      return {
        updateOne: {
          filter: { pokemonId: pokemonData.id },
          update: {
            $set: {
              pokemonId: pokemonData.id,
              name: pokemonData.name.toLowerCase(),
              types: pokemonData.types.map((type) => type.type.name),
              img:
                pokemonData.sprites.other.dream_world.front_default ||
                pokemonData.sprites.front_default,
              stats: pokemonData.stats.map((stat) => ({
                base_stat: stat.base_stat,
                stat: { name: stat.stat.name }, // Mantiene la estructura original
              })),
            },
          },
          upsert: true, // Inserta si no existe
        },
      };
    });

    // Ejecutar todas las operaciones en un solo batch
    const bulkOps = await Promise.all(pokemonBulkOps);
    await Pokemon.bulkWrite(bulkOps);

    res.json({ message: "Base de datos actualizada sin duplicados" });
  } catch (error) {
    res.status(500).json({ message: "Error poblando la base de datos" });
  }
};



// Obtener un Pokémon por nombre
const getPokemonByName = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ name: req.params.name.toLowerCase() });
    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon no encontrado" });
    }
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo el Pokémon" });
  }
};


// Añadir un nuevo Pokémon
const addPokemon = async (req, res) => {
  try {
    const { name, sprites, types, stats } = req.body;
    
    // Asegurarse de que los tipos están en el formato correcto
    const formattedTypes = types.map(type => ({
      type: {
        name: type.type.name 
      }
    }));

    const pokemon = await Pokemon.create({
      name,
      sprites,
      types: formattedTypes,
      stats
    });

    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: "Error añadiendo Pokémon" });
  }
};





export {
  getPokemons,
  fetchPokemonsFromAPI,
  getPokemonByName,
  addPokemon,
};
