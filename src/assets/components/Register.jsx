import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../components/register.css';
import Header from '../components/Headline'
import Navigation from '../components/Navigation';
import microfono from '../img/microfono.png';

const Register =()=>{

  return(
    <Fragment>
      <div className="register">
        <Header to="/" name="Datos Personales"/>

        <p>Por favor, complete su perfil antes de comenzar.</p> 
      
        <input
          placeholder="Ingresa tu nombre"
          type="text"
          aria-label="nombre"
          aria-required="true"
          name="name" 
        />

        <input
          placeholder="Ingresa tu apellido paterno"
          type="text"
          aria-label="apellido"
          aria-required="true"
          name="apellido"
        />

          <input
          placeholder="Ingresa tu apellido materno"
          type="text"
          aria-label="apellido"
          aria-required="true"
          name="apellido"
        />

        <input
          placeholder="Ingresa tu cedula de identidad"
          type="text"
          aria-label="rut"
          aria-required="true"
          name="rut"
        />
        
        <input
          placeholder="Ingresa tu correo electronico"
          type="text"
          aria-label="email"
          aria-required="true"
          name="email"
        />
        <input
          placeholder="Ingresa tu número de celular"
          type="text"
          aria-label="numerocelular"
          aria-required="true"
          name="numerocelular"
        />
        <Navigation 
        to="/RegistroDatosPersonales"   img={microfono}
        too="/" namee="Guardar"/>



      </div>

    </Fragment>
  )
}
export default Register;