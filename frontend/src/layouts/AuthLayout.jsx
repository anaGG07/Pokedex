import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    // contenedor principal
    <div className="min-h-screen bg-gray-100">
  
      {/* Aquí se renderizará el contenido de las rutas */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
