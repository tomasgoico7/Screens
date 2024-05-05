import axios from "axios";
import { useState, useEffect } from "react";
import "./../styles/Login.css";

export const Login = () => {
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

  return (
    <div className="login-container">
      <div className="login-box">
        {isLoggedIn ? (
          <div>
            <p>Ya has iniciado sesión.</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        ) : (
          <div>
            <h2>Iniciar Sesión</h2>
            {error && <p>{error}</p>}
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Iniciar Sesión</button>
          </div>
        )}
      </div>
    </div>
  );
};
