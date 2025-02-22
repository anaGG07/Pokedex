import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#151515] text-gray-300 text-center py-6 
      shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.02),inset_4px_4px_10px_rgba(0,0,0,0.6)]
      border-t border-gray-900/50"
    >
      <p
        className="text-xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent
        "
      >
        Pokédex App © 2025
      </p>

      <p className="text-md mt-2 tracking-wide">
        Desarrollado con <span className="animate-pulse text-2xl">❤️</span> por: 
        <span className="font-bold text-red-400"> Ana Maria Garcia</span>
      </p>

      <p className="text-sm mt-3 opacity-80">
        Datos proporcionados por{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-red-500 hover:text-red-400 transition-all duration-300"
        >
          PokeAPI
        </a>
      </p>
    </footer>
  );
};

export default Footer;
