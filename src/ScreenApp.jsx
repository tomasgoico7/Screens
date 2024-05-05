import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { LoginPage } from "./pages/LoginPage";
import { ScreenPage } from "./pages/ScreenPage";
import { CreateScreenPage } from "./pages/CreateScreenPage";
import { EditScreenPage } from "./pages/EditScreenPage";
import { ScreenDetailPage } from "./pages/ScreenDetailPage";
import { Footer } from "./components/Footer/Footer";
import "./styles/ScreenApp.css";

export const ScreenApp = () => {
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/screens" element={<ScreenPage />} />
          <Route path="/create" element={<CreateScreenPage />} />
          <Route path="/edit/:id" element={<EditScreenPage />} />
          <Route path="/detail/:id" element={<ScreenDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
