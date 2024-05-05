import { useState, useEffect } from "react";
import axios from "axios";

export const useScreenList = () => {
  const [screens, setScreens] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({ name: "", type: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cardsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsLoggedIn(false);
          return;
        } else {
          setIsLoggedIn(true);
        }

        const response = await axios.get(
          "https://challenge-front-7fw1.onrender.com/display",
          {
            params: {
              pageSize: cardsPerPage,
              offset: (currentPage - 1) * cardsPerPage,
              ...filters,
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && Array.isArray(response.data.data)) {
          setScreens(response.data.data);
          setTotalPages(Math.ceil(response.data.totalCount / cardsPerPage));
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, filters]);

  return {
    screens,
    error,
    currentPage,
    totalPages,
    filters,
    isLoggedIn,
    isLoading,
    setCurrentPage,
    setFilters,
  };
};
