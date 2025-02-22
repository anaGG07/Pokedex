import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] text-white px-6">
      <div
        className="p-10 max-w-3xl mx-auto bg-[#151515]/80 rounded-2xl
        shadow-[20px_20px_30px_-10px_rgba(0,0,0,0.6),-4px_-4px_10px_-4px_rgba(255,255,255,0.05)]
        text-center space-y-6"
      >
        {/* Icono */}
        <div className="flex justify-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_50px_5px_rgba(255,77,77,0.5)] 
            bg-gradient-to-br from-red-500 to-red-700 text-white text-6xl font-bold animate-pulse"
          >
            ❌
          </div>
        </div>

       
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-lg">
          ¡Error 404!
        </h1>

       
        <p className="text-gray-300 text-lg">
          Parece que te perdiste... la página que buscas no existe.
        </p>

       
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-[#1a1a1a] text-white font-bold rounded-xl
          shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.01),inset_2px_2px_6px_rgba(0,0,0,0.8)]
          hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_8px_rgba(0,0,0,0.9)]
          transition-all duration-300 transform hover:-translate-y-1"
        >
          Volver al inicio
        </button>

      
        <div className="text-center mt-6 relative">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
            alt="Psyduck Confundido"
            className="w-28 h-28 mx-auto"
          />
          <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full scale-75 -z-10"></div>
          <p className="text-lg text-gray-400 font-medium">
            Psyduck también está perdido...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
