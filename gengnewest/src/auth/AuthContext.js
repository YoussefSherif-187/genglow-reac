import { createContext, useEffect, useState } from "react";
import api from "../auth/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
        console.log("====================================");
        console.log(res.data);
        console.log("====================================");
        setUser(res.data.user || res.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
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
    setUser(res.data.user);
    setError(""); // clear previous errors

    return res.data.user;
  } catch (err) {
    const msg =
      err.response?.data?.message || "Invalid email or password";
    setError(msg); // 🔥 store error message
    throw err;
  }
};



  // logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
<AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
