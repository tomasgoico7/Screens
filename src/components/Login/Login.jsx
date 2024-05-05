import React from "react";
import { useLoginLogic } from "./LoginLogic";
import "./Login.css";

export const Login = () => {
  const {
    email,
    password,
    error,
    isLoggedIn,
    handleLogin,
    handleLogout,
    setEmail,
    setPassword,
  } = useLoginLogic();

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
