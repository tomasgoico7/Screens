import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { Filter } from "./Filter";
import "./../styles/ScreenList.css";

export const ScreenList = () => {
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (!isLoggedIn) {
    return (
      <p className="login-message">
        Por favor, inicia sesión para acceder a las pantallas.
      </p>
    );
  }

  return (
    <div className="ScreenList-container">
      <div className="header-container">
        <Filter onChange={handleFilterChange} />
        <Link to="/create" className="button-newScreen">
          Crear Nueva Pantalla
        </Link>
      </div>
      {isLoading && <p className="loading-message">Cargando pantallas...</p>}
      <div className="cards-container">
        {error && <p>{error}</p>}
        {screens.map((screen) => (
          <Link
            to={`/detail/${screen.id}`}
            className="card-link-container"
            key={screen.id}
          >
            <div className="card-container">
              <img
                src={screen.picture_url}
                alt="Screen"
                className="card-image"
              />
              <div className="card-title">{screen.name}</div>
              <div className="card-resolution">
                {screen.resolution_width} x {screen.resolution_height}
              </div>
              <div className="card-price">$ {screen.price_per_day}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
