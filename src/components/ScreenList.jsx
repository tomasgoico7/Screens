import React, { useState, useEffect } from "react";
import axios from "axios";
import ScreenDetail from "./ScreenDetail";
import { Link } from "react-router-dom";

export const ScreenList = () => {
  const [screens, setScreens] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token de autenticación no encontrado");
        }

        const response = await axios.get(
          "https://challenge-front-7fw1.onrender.com/display",
          {
            params: {
              pageSize: 10,
              offset: 0,
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && Array.isArray(response.data.data)) {
          setScreens(response.data.data);
        } else {
          throw new Error(
            "La respuesta del servidor no tiene el formato esperado"
          );
        }
      } catch (error) {
        console.error("Error al obtener la lista de pantallas:", error);
        setError(
          "Error al obtener la lista de pantallas. Inténtalo de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Lista de Pantallas</h2>
      {error && <p>{error}</p>}
      <ul>
        {screens.map((screen) => (
          <li key={screen.id}>
            {screen.name} - {screen.description}
            <Link to={`/detail/${screen.id}`}>Detalles</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Crear Nueva Pantalla</Link>
    </>
  );
};
