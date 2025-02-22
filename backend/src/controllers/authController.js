import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Registrar un nuevo usuario
const registerUser = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    // Verificar si el usuario ya existe
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Crear usuario
    const user = await User.create({ username, email, password });


    return res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });

  } catch (error) {

    console.error("Error al registrar usuario:", error.message);
    return res.status(500).json({ message: "Error al registrar usuario" });

  }
};

// Iniciar sesión
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Buscar usuario por email
    const user = await User.findOne({ email });

    // Verificar si existe y si la contraseña es correcta
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

   
    return res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });

  } catch (error)
  {
    console.error("Error al iniciar sesión:", error.message);
    return res.status(500).json({ message: "Error al iniciar sesión" });
    
  }
};

export { registerUser, loginUser };
