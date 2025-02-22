//. IMPORTACIONES

import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

const PORT = process.env.PORT || 4000;

// Función principal para iniciar el servidor
const startServer = async () => {
  try {
    // Conectar a la base de datos
    await connectDB();

    // Si la conexión es exitosa, inicia el servidor
    app.listen(PORT, '0.0.0.0', () => {
      
      console.log(`Servidor corriendo en el puerto ${PORT}`);

    });

  } catch (error) {

    console.error("Error al iniciar el servidor:", error.message);
    process.exit(1);

  }
};

// Llamar a la función para iniciar el servidor
startServer();
