import User from "../models/User.js";
import Pokemon from "../models/Pokemon.js";


// Obtener favoritos del usuario autenticado
const getUserFavorites = async (req, res) => {

  try {

    const user = await User.findById(req.user._id).populate("favorites");

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(user.favorites);

  } catch (error) {

    res.status(500).json({ message: "Error al obtener los favoritos" });

  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {

  try {

    const users = await User.find().select("-password");
    res.json(users);

  } catch (error) {

    res.status(500).json({ message: "Error al obtener los usuarios" });

  }
};

// Añadir Pokémon a favoritos
const addToFavorites = async (req, res) => {

  try {
    const { _id: userId } = req.user;
    const pokemon = await Pokemon.findOne({
      name: req.params.name.toLowerCase(),
    });

    if (!pokemon)
      return res.status(404).json({ message: "Pokémon no encontrado" });

    const user = await User.findById(userId);

    if (user.favorites.includes(pokemon._id)) {
      return res
        .status(400)
        .json({ message: `${pokemon.name} ya está en tus favoritos` });
    }

    user.favorites.push(pokemon._id);
    await user.save();

    res
      .status(200)
      .json({ message: `${pokemon.name} añadido a tus favoritos`, pokemon });
    
  } catch (error) {

    res.status(500).json({ message: "Error al añadir a favoritos" });

  }
};

// Eliminar Pokémon de favoritos
const removeFromFavorites = async (req, res) => {

  try {

    const { _id: userId } = req.user;
    const pokemon = await Pokemon.findOne({
      name: req.params.name.toLowerCase(),
    });

    if (!pokemon)
      return res.status(404).json({ message: "Pokémon no encontrado" });

    const user = await User.findById(userId);

    if (!user.favorites.includes(pokemon._id)) {
      return res
        .status(400)
        .json({ message: `${pokemon.name} no está en favoritos` });
    }

    user.favorites.pull(pokemon._id);
    await user.save();

    res.status(200).json({ message: `${pokemon.name} eliminado de favoritos` });

  } catch (error) {

    res.status(500).json({ message: "Error al eliminar de favoritos" });

  }
};

// Obtener ranking de Pokémon favoritos (corregido)
const getFavoritesRanking = async (req, res) => {
  try {
    
    const ranking = await Pokemon.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "favorites",
          as: "favoritedBy",
        },
      },
      { $addFields: { favoriteCount: { $size: "$favoritedBy" } } },
      { $match: { favoriteCount: { $gt: 0 } } }, // 🔥 Solo incluir Pokémon con al menos 1 favorito
      { $sort: { favoriteCount: -1 } },
      { $limit: 10 },
      { $project: { name: 1, pokemonId: 1, img: 1, favoriteCount: 1 } },
    ]);

    res.json(ranking);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo ranking de favoritos" });
  }
};


export {
  getAllUsers,
  getUserFavorites,
  addToFavorites,
  removeFromFavorites,
  getFavoritesRanking,
};
