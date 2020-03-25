import React, { Fragment } from 'react';
import './lightCompany.css';
import Header from '../../components/Headline'
import BtnBackNext from '../../components/btnBackNext';

const GasCompanies = () => {
  return (
  <Fragment className="containerOne" >
    <div className="LightCompanies">
    <Header to="/" name="Gas"/>
    <p>Por favor, seleccione la empresa..</p>
    <button className="btnCompany" aria-label="Metrogas">Metrogas</button>
    <button className="btnCompany" aria-label="Abastible Boletas" >Abastible Boletas</button>
    <button className="btnCompany" aria-label="Gas Sur S.A.">Gas Sur S.A.</button>
    <button className="btnCompany" aria-label="Gasco Magallanes">Gasco Magallanes</button>
    <button className="btnCompany" aria-label="Gasco GLP S.A.">Gasco GLP S.A.</button>
    <button className="btnCompany" aria-label="Uligas">Uligas</button>
    <button className="btnCompany" aria-label="Gasvalpo">Gasvalpo</button>
    {/* <button className="btnCompany" aria-label="Lipigas Granel Envasado">Lipigas Granel Envasado</button>
    <button className="btnCompany" aria-label="Lipigas Medidor">Lipigas Medidor</button>
    <button className="btnCompany" aria-label="Abastible N Cliente Medidor">Abastible N Cliente Medidor</button>
    <button className="btnCompany" aria-label="Abastible N Documento">Abastible N Documento</button>
    <button className="btnCompany" aria-label="Abastible Rut">Abastible Rut</button>
    <button className="btnCompany" aria-label="Abastible N Cliente Granel">Abastible N Cliente Granel</button>
    <button className="btnCompany" aria-label="Abastible Facturas">Abastible Facturas</button>*/}
    <BtnBackNext to="/CuentaUnica"/> 
    <button className="btn-volume" ><i class="fas fa-microphone fa-5x"></i></button>
    </div>
  </Fragment>);
};
export default GasCompanies;