import React from "react";
import "./../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Tomas Goicoechea. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};
