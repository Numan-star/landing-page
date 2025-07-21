"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../services/authService";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  if (typeof setUser === "undefined") {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const login = async (credentials) => {
    const result = await authService.login(credentials);

    if (result.success) {
      setUser(result.user);
    }

    return result;
  };

  const googleLogin = async (token) => {
    const result = await authService.googleLogin(token);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  };

  const register = async (userData) => {
    const result = await authService.register(userData);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  };

  const forgotPassword = async (userData) => {
    const result = await authService.forgotPassword(userData);
    return result;
  };

  const resetPassword = async (userData) => {
    const result = await authService.resetPassword(userData);
    return result;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    router.push("/login");
  };

  return {
    user,
    login,
    googleLogin,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated: !!user,
  };
};
