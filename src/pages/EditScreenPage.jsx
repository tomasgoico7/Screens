import React from "react";
import { Link, useParams } from "react-router-dom";
import { ScreenForm } from "../components/ScreenForm";

export const EditScreenPage = () => {
  const { id } = useParams(); // Obtener el ID de la pantalla a editar de los parámetros de la URL

  const handleEditScreen = (editedScreenData) => {
    // Aquí puedes realizar la lógica para mostrar un mensaje de éxito, redireccionar, etc.
    console.log("Pantalla editada:", editedScreenData);
  };
  return (
    <>
      <h2>Editar Pantalla</h2>
      <ScreenForm onSubmit={handleEditScreen} screenId={id} />
      {/* Agregar enlace para volver a la lista de pantallas */}
      <Link to={`/detail/${id}`}>Volver al detalle</Link>
    </>
  );
};
