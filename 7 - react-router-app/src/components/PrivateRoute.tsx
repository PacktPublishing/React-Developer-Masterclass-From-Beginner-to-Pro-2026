import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
