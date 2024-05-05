import React from "react";
import { Link, useParams } from "react-router-dom";
import { ScreenForm } from "../components/ScreenForm/ScreenForm";

export const EditScreenPage = () => {
  const { id } = useParams();

  const handleEditScreen = (editedScreenData) => {
    console.log("Pantalla editada:", editedScreenData);
  };
  return (
    <>
      <ScreenForm onSubmit={handleEditScreen} screenId={id} />
    </>
  );
};
