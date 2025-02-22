import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import FavoritesPage from "../pages/FavoritesPage";
import Home from "../pages/Home";
import PokemonDetailPage from "../pages/PokemonDetailPage";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import { ROUTES } from "./paths";
import { API_ROUTES } from "../config/apiRoutes";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.SEARCH,
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.FAVORITES,
        element: (
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.POKEMON_DETAIL,
        element: (
          <ProtectedRoute>
            <PokemonDetailPage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            API_ROUTES.POKEMONS.GET_ONE(params.name)
          );
          if (!response.ok) {
            throw new Error("Pokemon not found");
          }
          return await response.json();
        },
      },
      {
        path: ROUTES.ABOUT,
        element:
          <ProtectedRoute>
            <AboutPage />,
          </ProtectedRoute>
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.REGISTER,
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
    ],
  },
]);
