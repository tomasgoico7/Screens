import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://challenge-front-7fw1.onrender.com/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("token", response.data.token);
      console.log("Respuesta del servidor", response.data);
    } catch (error) {
      console.error("Error al iniciar sesion", error);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };
  return (
    <>
      <h2>Iniciar Sesión</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </>
  );
};
