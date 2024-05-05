import React from "react";
import { Link } from "react-router-dom";
import { useScreenForm } from "./ScreenFormLogic";
import "./ScreenForm.css";

export const ScreenForm = ({ onSubmit, screenId }) => {
  const {
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
  } = useScreenForm(screenId);

  if (isLoading) {
    return (
      <div className="screenForm-container">
        <p className="loading-message">Cargando formulario...</p>
      </div>
    );
  }

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
            <label htmlFor="price">Precio por día (USD):</label>
            <input
              type="number"
              id="price"
              placeholder="Precio por día"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resolutionWidth">
              Resolución - Ancho (metros):
            </label>
            <input
              type="number"
              id="resolutionWidth"
              placeholder="Resolución - Ancho"
              value={resolutionWidth}
              onChange={(e) => setResolutionWidth(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resolutionHeight">
              Resolución - Alto (metros):
            </label>
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
          <button type="submit" className="form-button">
            {screenId ? "Editar" : "Crear"} Pantalla
          </button>
        </div>
      </form>
    </div>
  );
};
