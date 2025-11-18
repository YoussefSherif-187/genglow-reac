import { Navigate, Outlet } from 'react-router-dom'
import React, { useContext } from "react";
import { AuthContext } from "../src/auth/AuthContext";

const Privateroutes = ({ children, allowedRoles }) => {
  const { authState } = useContext(AuthContext);

  if (authState.loading) return <div>Loading...</div>;

  if (authState.role === "signedout") return <Navigate to="/signin" />;

  if (!allowedRoles.includes(authState.role))
    return <Navigate to="/unauthorized" />;

  return children;
};



export default Privateroutes