import React, { Fragment, Component } from 'react'
import './lightCompany.css';
import Header from '../../components/Headline'
import BtnBackNext from '../../components/btnBackNext';
import "../Home/Home.css";


const NetCompanies = () => {
  return (
  <Fragment  >
     <div className="LightCompanies">
    <Header to="/" name="Internet"/>
    <p>Por favor, seleccione la empresa..</p>
    <button className="btnCompany" aria-label="Claro Movil">Claro Movil</button>
    <button className="btnCompany" aria-label="Claro Recarga Online">Claro Recarga Online</button>
    <button className="btnCompany" aria-label="Entel Pcs">Entel Pcs</button>
    <button className="btnCompany" aria-label="Entel Pcs Recarga online">Entel Pcs Recarga online</button>
    <button className="btnCompany" aria-label="Wom">Wom</button>
    <button className="btnCompany" aria-label="Movistar Hogar Movil">GMovistar Hogar Movil</button>
    {/* <button aria-label="Virgin Mobile">Virgin Mobile</button>


     <Fragment className="containerOne" >

    <button aria-label="Claro Movil">Claro Movil</button>
    <button aria-label="Claro Recarga Online">Claro Recarga Online</button>
    <button aria-label="Entel Pcs">Entel Pcs</button>
    <button aria-label="Entel Pcs Recarga online">Entel Pcs Recarga online</button>
    <button aria-label="Wom">Wom</button>
    <button aria-label="Movistar Hogar Movil">GMovistar Hogar Movil</button>
    <button aria-label="Virgin Mobile">Virgin Mobile</button>

    <button aria-label="Virgin Empresas">Virgin Empresas</button>  */}
    <BtnBackNext to="/CuentaUnica"/> 
    <button className="btn-volume" ><i class="fas fa-microphone fa-5x"></i></button>
    </div>
  </Fragment>)
}
export default NetCompanies;

