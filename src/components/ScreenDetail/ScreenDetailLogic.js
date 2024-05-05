import { useState, useEffect } from "react";
import axios from "axios";

export const useScreenDetail = (screenId) => {
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
        setIsLoading(false);
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
    } catch (error) {
      setError(
        "Error al eliminar la pantalla. Inicie sesión o inténtalo de nuevo más tarde."
      );
    }
  };

  return { screen, error, isLoading, handleDeleteScreen };
};
