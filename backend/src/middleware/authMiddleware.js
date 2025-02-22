import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/User.js";

const protect = async (req, res, next) => {

  // VERIFICACIÓN DEL TOKEN 
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") // <--- Bearer significa que es un token de autenticación


  ) {
    try {

      // Extraer y verificar el token
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Convertir el id del usuario en un ObjectId de MongoDB
      const userId = new mongoose.Types.ObjectId(decoded.id);

      // Obtener el usuario de bd
      req.user = await User.findById(userId).select("-password"); // <---- -password significa que ingnora este campo
      console.log("Usuario autenticado");

      if (!req.user) {
        return res
          .status(401)
          .json({ message: "Usuario no encontrado con este token" });
      }

      next();
      
    } catch (error) {

      console.error("Error al verificar token:", error);
      return res.status(401).json({ message: "No autorizado, token inválido" });

    }
  } else {

    return res
      .status(401)
      .json({ message: "No autorizado, no se proporcionó token" });
    
  }
};

export default protect;
