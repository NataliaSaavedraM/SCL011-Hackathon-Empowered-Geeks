import React, { Fragment } from 'react';
import Header from '../../components/Headline'
import BtnBackNext from '../../components/btnBackNext';
import './lightCompany.css';


const CellCompanies = () => {
  return (
  <Fragment className="containerOne" >
    <div  className="LightCompanies">
     <Header to="/" name="Luz"/>
     <p>.
     Por favor, seleccione la empresa.</p>
    <button  className="btnCompany" aria-label="Claro Movil">Claro Movil</button>
    <button className="btnCompany" aria-label="Claro Recarga Online">Claro Recarga Online</button>
    <button className="btnCompany"aria-label="Entel Pcs">Entel Pcs</button>
    <button className="btnCompany" aria-label="Entel Pcs Recarga online">Entel Pcs Recarga online</button>
    <button className="btnCompany" aria-label="Virgin Mobile">Virgin Mobile</button>
    <button className="btnCompany" aria-label="Wom">Wom</button>
    <button className="btnCompany"  aria-label="Movistar Hogar Movil">GMovistar Hogar Movil</button>
    {/* <button className="btnCompany" aria-label="JJD Comunicaciones">JJD Comunicaciones</button>
    <button className="btnCompany" aria-label="Movistar Recarga Online">Movistar Recarga Online</button>
    <button className="btnCompany" aria-label="Movistar  Rut Movil">Movistar  Rut Movil</button>
    <button className="btnCompany" aria-label="Netline Mobile">Netline Mobile</button>
    <button className="btnCompany"aria-label="Virgin Empresas">Virgin Empresas</button>
    <button className="btnCompany"aria-label="Claro Empresas" >Claro Empresas</button>  */}
   <BtnBackNext to="CuentaUnica"/>
      <button className="btn-volume" ><i class="fas fa-microphone fa-7x"></i></button>
      </div>
  </Fragment>);
};
export default CellCompanies;