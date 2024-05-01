import React from "react";
import { useParams } from "react-router-dom";
import ScreenDetail from "../components/ScreenDetail";

export const ScreenDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Detalles de la Pantalla</h1>
      <ScreenDetail screenId={id} />
    </>
  );
};
