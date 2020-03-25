import React, { Fragment } from "react";
import "../components/Acces.css";
import {  Link } from "react-router-dom";

import Navigation from '../components/Navigation.jsx';
import logo from '../img/ojo.png';

const Acces = () => {
  
  return (
    <Fragment>
      <div className="acces">
        <h1 className="headLine">Bienvenido a Vipago</h1>
        <img src={logo} className="logo" alt="ojo parchado" />
        
        <div className="navbar">
        <Link to="/InicioDeSeccion" className="Navigation-link">Ingresa</Link>
        <Link to="/RegistroDatosPersonales" className="Navigation-link">Regístrate</Link>
        </div>

      </div>
    </Fragment>
  );
};
export default Acces;
