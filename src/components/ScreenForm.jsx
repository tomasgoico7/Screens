import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio por día"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Resolución - Ancho"
        value={resolutionWidth}
        onChange={(e) => setResolutionWidth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Resolución - Alto"
        value={resolutionHeight}
        onChange={(e) => setResolutionHeight(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
      <button type="submit">{screenId ? "Editar" : "Crear"} Pantalla</button>
      {error && <p>{error}</p>}
    </form>
  );
};
