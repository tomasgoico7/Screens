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
      <ScreenForm onSubmit={handleCreateScreen} />
    </>
  );
};
