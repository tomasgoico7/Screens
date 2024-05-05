import axios from "axios";
import { useState, useEffect } from "react";

export const useLoginLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://challenge-front-7fw1.onrender.com/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      setError("");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return {
    email,
    password,
    error,
    isLoggedIn,
    handleLogin,
    handleLogout,
    setEmail,
    setPassword,
  };
};
