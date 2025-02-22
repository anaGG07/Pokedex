import { createContext, useContext, useState, useEffect } from "react";
import { API_ROUTES } from "../config/apiRoutes";

const RankingContext = createContext();

export const useRanking = () => useContext(RankingContext);

export const RankingProvider = ({ children }) => {
  const [ranking, setRanking] = useState([]);

  const fetchRanking = async () => {
    try {
      const response = await fetch(API_ROUTES.AUTH.FAVORITES_RANKING);
      if (!response.ok) throw new Error("Error al obtener el ranking");
      const data = await response.json();

      if (data.length === 0) {
        setRanking([]);
      } else {
        setRanking(data.slice(0, 3));
      }
    } catch (error) {
      console.error("Error al obtener ranking:", error);
    }
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  return (
    <RankingContext.Provider value={{ ranking, fetchRanking }}>
      {children}
    </RankingContext.Provider>
  );
};
