// ScreenDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../styles/ScreenDetail.css";

export const ScreenDetail = ({ screenId }) => {
  const [screen, setScreen] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScreenDetail = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token de autenticación no encontrado");
        }

        const response = await axios.get(
          `https://challenge-front-7fw1.onrender.com/display/${screenId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setScreen(response.data);
      } catch (error) {
        setError(
          "Error al eliminar la pantalla. Inicie sesión o inténtalo de nuevo más tarde."
        );
      } finally {
        setIsLoading(false); // Desactivar el estado de carga cuando la solicitud se complete
      }
    };

    fetchScreenDetail();
  }, [screenId]);

  const handleDeleteScreen = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token de autenticación no encontrado");
      }

      await axios.delete(
        `https://challenge-front-7fw1.onrender.com/display/${screenId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Manejar la eliminación exitosa, redireccionar o mostrar mensaje, etc.
    } catch (error) {
      setError(
        "Error al eliminar la pantalla. Inicie sesión o inténtalo de nuevo más tarde."
      );
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!screen) {
    return (
      <div className="screen-detail-container">
        <p className="loading-message">Cargando detalles de la pantalla...</p>
      </div>
    );
  }

  return (
    <div className="screen-detail-container">
      <div className="button-back">
        <Link to={"/screens"}>
          <button>Volver Atrás</button>
        </Link>
      </div>
      <div className="detail-card">
        <h1 className="title">Detalles de la Pantalla</h1>
        <div className="img-container">
          <img
            src={screen.picture_url}
            alt="Screen Picture"
            className="screen-image"
          />
        </div>
        <div className="info-container">
          <h2>{screen.name}</h2>
          <p>Descripción: {screen.description}</p>
          <p>Precio por día: ${screen.price_per_day}</p>
          <p>
            Resolución: {screen.resolution_width} x {screen.resolution_height}
          </p>
          <p>Tipo: {screen.type}</p>
        </div>
        <div className="buttons-container">
          <Link to={`/edit/${screenId}`}>
            <button className="edit-button">Editar Pantalla</button>
          </Link>
          <Link to="/screens">
            <button className="delete-button" onClick={handleDeleteScreen}>
              Eliminar Pantalla
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScreenDetail;
