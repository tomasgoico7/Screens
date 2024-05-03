import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { Filter } from "./Filter"; // Importa el componente Filter
import "./../styles/ScreenList.css";

export const ScreenList = () => {
  const [screens, setScreens] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({ name: "", type: "" });

  const cardsPerPage = 12;

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
              pageSize: cardsPerPage,
              offset: (currentPage - 1) * cardsPerPage,
              ...filters, // Agrega los filtros a los parámetros de consulta
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
      }
    };

    fetchData();
  }, [currentPage, filters]); // Agrega filters como dependencia

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="ScreenList-container">
      <div className="header-container">
        <h2>Lista de Pantallas</h2>
        <Filter onChange={handleFilterChange} />
        <Link to="/create" className="button-newScreen">
          Crear Nueva Pantalla
        </Link>
      </div>
      <div className="cards-container">
        {error && <p>{error}</p>}
        {screens.map((screen) => (
          <div key={screen.id} className="card-container">
            <img src={screen.picture_url} alt="Screen" className="card-image" />
            <div className="card-title">{screen.name}</div>
            <div className="card-description">{screen.description}</div>
            <div className="card-link-container">
              <Link to={`/detail/${screen.id}`} className="card-link">
                Detalles
              </Link>
            </div>
          </div>
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
