import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LoginPage } from "./pages/LoginPage";
import { ScreenPage } from "./pages/ScreenPage";
import { CreateScreenPage } from "./pages/CreateScreenPage"; // Importa la página para la creación de pantallas
import { EditScreenPage } from "./pages/EditScreenPage"; // Importa la página para la edición de pantallas
import { ScreenDetailPage } from "./pages/ScreenDetailPage"; // Importa la página para la edición de pantallas

export const ScreenApp = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/screens" element={<ScreenPage />} />
        <Route path="/create" element={<CreateScreenPage />} />
        <Route path="/edit/:id" element={<EditScreenPage />} />
        <Route path="/detail/:id" element={<ScreenDetailPage />} />
      </Routes>
    </>
  );
};
