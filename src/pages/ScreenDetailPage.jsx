import React from "react";
import { useParams } from "react-router-dom";
import ScreenDetail from "../components/ScreenDetail";

export const ScreenDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <ScreenDetail screenId={id} />
    </>
  );
};
