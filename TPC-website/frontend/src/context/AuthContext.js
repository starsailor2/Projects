import React, { createContext, useState, useEffect } from 'react';
import { registerUser, loginUser, getStudentProfile } from '../js/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setAuth(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const register = async (userData) => {
        const response = await registerUser(userData);
        setAuth(response);
        localStorage.setItem('user', JSON.stringify(response));
    };

    const login = async (userData) => {
        const response = await loginUser(userData);
        setAuth(response);
        localStorage.setItem('user', JSON.stringify(response));
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('user');
    };

    const fetchProfile = async () => {
        const token = auth?.token;
        if (token) {
            const profile = await getStudentProfile(token);
            setAuth((prev) => ({ ...prev, profile }));
        }
    };

    return (
        <AuthContext.Provider value={{ auth, register, login, logout, fetchProfile, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
