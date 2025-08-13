import type React from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children: React.ReactNode;
}

function ProtectedRoutes({ children }: IProtectedRoute) {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
