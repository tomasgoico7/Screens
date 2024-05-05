import React from "react";
import { ScreenForm } from "../components/ScreenForm/ScreenForm";

export const CreateScreenPage = () => {
  const handleCreateScreen = (newScreenData) => {
    console.log("Nueva pantalla creada:", newScreenData);
  };
  return (
    <>
      <ScreenForm onSubmit={handleCreateScreen} />
    </>
  );
};
