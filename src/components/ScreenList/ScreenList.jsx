import React from "react";
import { Link } from "react-router-dom";
import { useScreenList } from "./ScreenListLogic";
import { Pagination } from "../Pagination/Pagination";
import { Filter } from "../Filter/Filter";
import "./ScreenList.css";

export const ScreenList = () => {
  const {
    screens,
    error,
    currentPage,
    totalPages,
    filters,
    isLoggedIn,
    isLoading,
    setCurrentPage,
    setFilters,
  } = useScreenList();

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
        {screens.length === 0 && !isLoading && (
          <p className="no-screens-message">No hay pantallas para mostrar.</p>
        )}
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
