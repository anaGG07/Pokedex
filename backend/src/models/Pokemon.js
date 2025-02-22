import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PokemonSchema = new Schema({
  pokemonId: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  types: [String],
  img: { type: String },
  stats: [
    {
      base_stat: { type: Number },
      stat: {
        name: { type: String },
      },
    },
  ]
 
});

export default model("Pokemon", PokemonSchema);
