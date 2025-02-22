import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ROUTES } from "../config/apiRoutes";
import { toast } from "sonner";
import { usePokemon } from "../context/PokemonContext";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Datos enviados al backend:", { username, email, password });

    try {
      const response = await fetch(API_ROUTES.AUTH.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }

      const data = await response.json();
   
      toast.success("Registro exitoso", {
        style: {
          background: "#151515", 
          color: "#fff", 
          borderRadius: "10px",
          padding: "16px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow:
            "inset -4px -4px 8px rgba(255,255,255,0.05), inset 4px 4px 8px rgba(0,0,0,0.6), 4px 4px 10px rgba(0,0,0,0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        icon: "✅",
      });

      navigate("/login");
    } catch (error) {
      console.error("Error al registrar:", error);
     toast.error("Credenciales inválidas", {
       style: {
         background: "#151515", 
         color: "#ff5a5a", 
         borderRadius: "10px",
         padding: "16px",
         fontSize: "16px",
         fontWeight: "bold",
         textAlign: "center",
         boxShadow:
           "inset -4px -4px 8px rgba(255,255,255,0.05), inset 4px 4px 8px rgba(0,0,0,0.6), 4px 4px 10px rgba(0,0,0,0.8)",
         border: "1px solid rgba(255, 255, 255, 0.1)",
       },
       icon: "❌",
     });
    }
  };

  return (
    <div className="container mx-auto p-4 bg-[#0a0a0a] min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-[#080808] to-[#0f0f0f]">
      <div
        className="max-w-md w-full backdrop-blur-sm bg-[#151515]/80 mt-8 p-5 rounded-3xl 
      shadow-[35px_35px_60px_-15px_rgba(0,0,0,0.5),-8px_-8px_20px_-8px_rgba(255,255,255,0.05)]
      relative "
      >
        {/* Icono Pokéball */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_50px_5px_rgba(246,45,20,0.5)] animate-pulse  bg-[url('https://w7.pngwing.com/pngs/337/240/png-transparent-pokeball-pokemon-battle-revolution-pikachu-entei-pokeball-sphere-pokemon-bulbasaur-thumbnail.png')] bg-cover bg-center"></div>

        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-12 tracking-wider mt-8">
          ¡Regístrate!
        </h1>

        <form onSubmit={handleRegister} className="space-y-8">
          <div className="space-y-6">
            {/* Input de nombre de usuario */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Nombre de Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 text-gray-200 bg-[#1a1a1a] rounded-xl
                shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]
                focus:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.9)]
                transition-all duration-300 outline-none placeholder-gray-600"
                placeholder="Tu nombre de usuario"
                required
              />
            </div>

            {/* Input de correo electrónico */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 text-gray-200 bg-[#1a1a1a] rounded-xl
                shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]
                focus:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.9)]
                transition-all duration-300 outline-none placeholder-gray-600"
                placeholder="ash@pokedex.com"
                required
              />
            </div>

            {/* Input de contraseña */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 text-gray-200 bg-[#1a1a1a] rounded-xl
                shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]
                focus:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.9)]
                transition-all duration-300 outline-none placeholder-gray-600"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-red-800 to-red-900 text-gray-200 text-lg font-bold px-6 py-4 rounded-xl
            shadow-[0_0_20px_rgba(220,38,38,0.2),-8px_-8px_16px_rgba(255,255,255,0.02),8px_8px_16px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_25px_rgba(220,38,38,0.3),-10px_-10px_20px_rgba(255,255,255,0.03),10px_10px_20px_rgba(0,0,0,0.5)]
            active:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]
            transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            ¡Únete a la aventura!
          </button>
        </form>

        
        <p className="text-center text-sm text-gray-500 mt-8">
          ¿Ya tienes cuenta?{" "}
          <a
            href="/login"
            className="text-red-500 hover:text-red-400 transition duration-300"
          >
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
