import React from "react";
import { Link } from "react-router-dom";
import { ScreenForm } from "../components/ScreenForm";

export const CreateScreenPage = () => {
  const handleCreateScreen = (newScreenData) => {
    // Aquí puedes realizar la lógica para mostrar un mensaje de éxito, redireccionar, etc.
    console.log("Nueva pantalla creada:", newScreenData);
  };
  return (
    <>
      <h2>Crear Nueva Pantalla</h2>
      <ScreenForm onSubmit={handleCreateScreen} />
      {/* Agregar enlace para volver a la lista de pantallas */}
      <Link to="/screens">Volver a la lista de pantallas</Link>
    </>
  );
};
