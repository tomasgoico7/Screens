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
      <ScreenForm onSubmit={handleEditScreen} screenId={id} />
    </>
  );
};
