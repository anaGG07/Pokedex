import { Navigate } from "react-router-dom";
import isAuthenticated from "../helper/isAuthenticated";

const PublicRoute = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/" replace={true} />; 
  }
  return children;
};

export default PublicRoute;
