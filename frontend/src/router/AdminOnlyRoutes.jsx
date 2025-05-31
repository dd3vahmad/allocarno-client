import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminOnlyRoute = () => {
  const { user } = useAuth();

  if (!user && user.role === "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminOnlyRoute;
