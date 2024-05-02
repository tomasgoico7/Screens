import axios from "axios";
import React, { useEffect, useState } from "react";
import "./../styles/ScreenForm.css";
import { Link } from "react-router-dom";

export const ScreenForm = ({ onSubmit, screenId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [resolutionWidth, setResolutionWidth] = useState(0);
  const [resolutionHeight, setResolutionHeight] = useState(0);
  const [type, setType] = useState("indoor");
  const [error, setError] = useState("");
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
        const screenData = response.data;
        setName(screenData.name);
        setDescription(screenData.description);
        setPrice(screenData.price_per_day);
        setResolutionWidth(screenData.resolution_width);
        setResolutionHeight(screenData.resolution_height);
        setType(screenData.type);
      } catch (error) {
        setError(
          "Error al obtener los detalles de la pantalla. Inténtalo de nuevo más tarde."
        );
      }
    };

    if (screenId) {
      fetchScreenDetail();
    }
  }, [screenId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token de autenticación no encontrado");
      }

      let response;
      if (screenId) {
        // Si se proporciona un screenId, entonces estamos editando una pantalla existente
        response = await axios.put(
          `https://challenge-front-7fw1.onrender.com/display/${screenId}`,
          {
            name,
            description,
            price_per_day: price,
            resolution_width: resolutionWidth,
            resolution_height: resolutionHeight,
            type,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        // Si no se proporciona un screenId, entonces estamos creando una nueva pantalla
        response = await axios.post(
          "https://challenge-front-7fw1.onrender.com/display",
          {
            name,
            description,
            price_per_day: price,
            resolution_width: resolutionWidth,
            resolution_height: resolutionHeight,
            type,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      onSubmit(response.data); // Pasar la pantalla actualizada o creada al componente padre
    } catch (error) {
      setError(
        "Error al guardar la pantalla. Por favor, revisa los datos ingresados e inténtalo de nuevo."
      );
    }
  };

  return (
    <div className="screenForm-container">
      <div className="button-back">
        <Link to={screenId ? `/detail/${screenId}` : "/screens"}>
          <button>Volver Atrás</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-box">
          <h2>{screenId ? "Editar Pantalla" : "Crear Pantalla"}</h2>
          {error && <p className="form-error">{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción:</label>
            <input
              type="text"
              id="description"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Precio por día:</label>
            <input
              type="number"
              id="price"
              placeholder="Precio por día"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resolutionWidth">Resolución - Ancho:</label>
            <input
              type="number"
              id="resolutionWidth"
              placeholder="Resolución - Ancho"
              value={resolutionWidth}
              onChange={(e) => setResolutionWidth(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resolutionHeight">Resolución - Alto:</label>
            <input
              type="number"
              id="resolutionHeight"
              placeholder="Resolución - Alto"
              value={resolutionHeight}
              onChange={(e) => setResolutionHeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo:</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>
          <Link to="/screens">
            <button type="submit" className="form-button">
              {screenId ? "Editar" : "Crear"} Pantalla
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
