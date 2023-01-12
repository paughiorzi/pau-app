import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import Portfolio from "./components/Portfolio";
import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

<link rel="stylesheet" href="App.css" />;

const App = () => {
  const arrayDeLink = [
    { id: "1", nombre: "About", enlace: "/" },
    { id: "2", nombre: "Habilidades", enlace: "/habilidades" },
    { id: "3", nombre: "Portfolio", enlace: "/portfolio" },
    { id: "4", nombre: "Contacto", enlace: "/contacto" },
  ];
  return (
    <Router className="app">
      <Fragment>

        <NavBar arrayDeLink={arrayDeLink} tamaño={"20px"} />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/habilidades" element={<Habilidades />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/Footer" element={<Footer />} />
        </Routes>
        
      </Fragment>
      <Footer />
    </Router>
  );
};
export default App;
