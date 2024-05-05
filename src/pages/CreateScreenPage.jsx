import React from "react";
import { ScreenForm } from "../components/ScreenForm/ScreenForm";

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
