import { Outlet, Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { auth } = useAuthContext();
  return !auth.jwt ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
