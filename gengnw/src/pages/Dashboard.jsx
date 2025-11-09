import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const Dashboard = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard