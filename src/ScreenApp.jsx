import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LoginPage } from "./pages/LoginPage";

export const ScreenApp = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route></Route>
      </Routes>
    </>
  );
};
