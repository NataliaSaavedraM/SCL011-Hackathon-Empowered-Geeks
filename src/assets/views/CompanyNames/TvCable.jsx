import React, { Fragment, Component } from 'react'
import './lightCompany.css';
import Header from '../../components/Headline'
import BtnBackNext from '../../components/btnBackNext';

const TvCable =()=>{
  return (
  <Fragment className="containerOne"  >
    <div className="LightCompanies">
    <Header to="/" name="TvCable"/>
    <p>Por favor, seleccione la empresa..</p>
    <button className="btnCompany" aria-label="Cable Color" >Cable Color</button>
    <button className="btnCompany" aria-label="Cable de la Costa">Cable de la Costa</button>
     <button className="btnCompany" aria-label="Telecable">Telecable</button>
     <button className="btnCompany" aria-label="Tv Cable Sur" >Tv Cable Sur</button>
    <button className="btnCompany" aria-label="Vtr Cuenta">Vtr Cuenta</button>
    <button className="btnCompany" aria-label="Directv Instalaciones">Directv Instalaciones</button>
    <button className="btnCompany"aria-label="Directv Mensualidades" >Directv Mensualidades</button>
    {/* <button aria-label="Tuves Equipos">Tuves Equipos</button>
    <button aria-label="Tuves Instalacione">Tuves Instalacione</button>
    <button aria-label="Grupo Setting">Grupo Setting</button>
    <button aria-label="Loncomilla" >Loncomilla</button>
    <button aria-label="Multicom">Multicom</button>
    <button aria-label="Mundo Pacifico Hogar">Mundo Pacifico Hogar</button>
    <button aria-label="Senalmax" >Senalmax</button> */}
    <BtnBackNext to="/CuentaUnica"/> 
    <button className="btn-volume" ><i class="fas fa-microphone fa-5x"></i></button>
    </div>
{/*  
    <button aria-label="Tu Ves">Tu Ves</button> */}
  </Fragment>)
}
export default TvCable;