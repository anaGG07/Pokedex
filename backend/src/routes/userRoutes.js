import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import {
  getAllUsers,
  getUserFavorites,
  addToFavorites,
  removeFromFavorites,
  getFavoritesRanking,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Rutas de autenticación
router.post("/register", registerUser);
router.post("/login", loginUser);

// Ruta para obtener todos los usuarios
router.get("/allUsers", getAllUsers);

// Rutas para manejar favoritos
router.get("/favorites", protect, getUserFavorites);
router.post("/favorite/:name", protect, addToFavorites);  // Añadir favorito
router.delete("/favorite/:name", protect, removeFromFavorites);  // Eliminar favorito
router.get("/favorites/ranking", getFavoritesRanking);

export default router;
