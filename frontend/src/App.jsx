import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { PokemonProvider } from "./context/PokemonContext";
import { router } from "./routes/router";
import { RankingProvider } from "./context/RankingContext";

const App = () => {
  return (
    <RankingProvider>
      <PokemonProvider>
        <Toaster position="top-left" duration={2000} />
        <RouterProvider router={router} />
      </PokemonProvider>
    </RankingProvider>
  );
};

export default App;
