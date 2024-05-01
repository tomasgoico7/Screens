import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LoginPage } from "./pages/LoginPage";
import { ScreenPage } from "./pages/ScreenPage";

export const ScreenApp = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/screens" element={<ScreenPage></ScreenPage>}></Route>
      </Routes>
    </>
  );
};
