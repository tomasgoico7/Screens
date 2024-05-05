import axios from "axios";
import { useState, useEffect } from "react";

export const useLoginLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si ya hay un token almacenado en el almacenamiento local
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
      setIsLoggedIn(true); // Establecer el estado de inicio de sesión como verdadero
      setError(""); // Reiniciar el estado de error cuando se inicia sesión correctamente
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token del almacenamiento local
    setIsLoggedIn(false); // Establecer el estado de inicio de sesión como falso
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
