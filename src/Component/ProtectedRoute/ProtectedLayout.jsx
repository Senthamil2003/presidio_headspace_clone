import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const { isLoggedIn } = useSelector((state) => state.data);

  return isLoggedIn ? <Outlet /> : <Navigate to="/home" />;
}
