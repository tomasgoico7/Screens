import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useScreenForm = (screenId) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [resolutionWidth, setResolutionWidth] = useState(0);
  const [resolutionHeight, setResolutionHeight] = useState(0);
  const [type, setType] = useState("indoor");
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
      } finally {
        setIsLoading(false);
      }
    };

    if (screenId) {
      fetchScreenDetail();
    } else {
      setIsLoading(false);
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

      navigate("/screens");
    } catch (error) {
      setError(
        "Error al guardar la pantalla. Por favor, revisa los datos ingresados e inténtalo de nuevo."
      );
    }
  };

  return {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    resolutionWidth,
    setResolutionWidth,
    resolutionHeight,
    setResolutionHeight,
    type,
    setType,
    error,
    isLoading,
    handleSubmit,
  };
};
