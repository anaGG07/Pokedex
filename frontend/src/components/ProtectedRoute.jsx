import { Navigate } from "react-router-dom";
import isAuthenticated from "../helper/isAuthenticated"; 

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
