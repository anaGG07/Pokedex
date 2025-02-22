import express from "express";
import cors from "./config/cors.js";
import userRoutes from "./routes/userRoutes.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors);

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/pokemons", pokemonRoutes);

// Ruta de prueba
app.get("/api/test", (req, res) => {
  res.json({
    message: "API funcionando correctamente",
    timestamp: new Date().toISOString(),
  });
});

export default app;
