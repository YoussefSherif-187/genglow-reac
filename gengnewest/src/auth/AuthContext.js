import { createContext, useEffect, useState } from "react";
import api from "../auth/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load user from token on page load
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/users/profile", { withCredentials: false })
      .then(res => {
        const userData = res.data.user || res.data;
        setUser(userData);
        setRole(userData.role); // ✅ sync role
        localStorage.setItem("role", userData.role);
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setUser(null);
        setRole(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // login
  const login = async (email, password) => {
    try {
      const res = await api.post(
        "/auth/login",
        { email, password },
        { withCredentials: false }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role); // ✅ store role

      setUser(res.data.user);
      setRole(res.data.user.role);
      setError("");

      return res.data.user;
    } catch (err) {
      const msg =
        err.response?.data?.message || "Invalid email or password";
      setError(msg);
      throw err;
    }
  };

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
    setRole(null);
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        role,        // ✅ expose role
        isLoggedIn,  // ✅ expose auth state
        login,
        logout,
        loading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
