import React, { createContext, useState, useEffect } from "react";
import api from "../auth/axios";

    export const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        user: null,
        role: "signedout",
        loading: true,
    });

    useEffect(() => {
        const checkAuth = async () => {
        try {
            const { data } = await api.get("/auth/me");
            setAuthState({
            user: data.user,
            role: data.user.role,
            loading: false,
            });
        } catch (err) {
            setAuthState({ user: null, role: "signedout", loading: false });
        }
        };
        checkAuth();
    }, []);

    const signin = async (email, password) => {
        const { data } = await api.post("/auth/signin", { email, password });
        localStorage.setItem("token", data.token);
        setAuthState({ user: data.user, role: data.user.role, loading: false });
    };

    const signout = async () => {
        localStorage.removeItem("token");
        setAuthState({ user: null, role: "signedout", loading: false });
    };

    return (
        <AuthContext.Provider value={{ authState, signin, signout }}>
        {children}
        </AuthContext.Provider>
    );
    };
