import React, { Fragment, Component} from 'react';
import '../CompanyNames/lightCompany.css';
import { Link } from "react-router-dom";
import Header from '../../components/Headline';
import BtnBackNext from '../../components/btnBackNext';

const WaterCompanies = () => {
  return (
  <Fragment >
  <div className="LightCompanies">
    <Header to="/" name="Agua"/>
    <p>Por favor, seleccione la empresa..</p>
<Link to="/BusquedaPorVoz"><button  aria-label="Aguas Andinas" className="btnCompany">Aguas Andinas</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Altiplano" className="btnCompany">Aguas Altiplano</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Cordillera" className="btnCompany">Aguas Cordillera</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Antofagastas" className="btnCompany">Aguas Antofagastas</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Araucania" className="btnCompany">Aguas Araucania</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Chañar" className="btnCompany">Aguas Chañar</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Manquehue" className="btnCompany">Aguas Manquehue</button></Link>
{/* <Link to="/BusquedaPorVoz"><button aria-label="Aguas Patagonia de Aysen" className="btnCompany">Aguas Patagonia de Aysen</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Esval" className="btnCompany">Esval</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Pirque S.A." className="btnCompany">Aguas Pirque S.A.</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Decima" className="btnCompany">Aguas Decima</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Agual del Valle" className="btnCompany">Agual del Valle</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Aguas Magallanes"className="btnCompany">Aguas Magallanes</button></Link>
<Link to="/BusquedaPorVoz"><button aria-label="Essal" className="btnCompany">Essal</button></Link> */}
<BtnBackNext to="/CuentaUnica"/> 
    <button className="btn-volume" ><i class="fas fa-microphone fa-5x"></i></button>
    </div>
    {/* <button aria-label="Emapal S.A.">Emapal S.A.</button>
    <button aria-label="Coopagua">Coopagua</button>
    <button aria-label="Aguas San Isidro">Aguas San Isidro</button>
    <button aria-label="Aguas San Pedro">Aguas San Pedro</button>
    <button aria-label="Aguas Altiplano">Aguas Altiplano</button>
    <button aria-label="Aprmarquesa">Aprmarquesa</button>
    <button aria-label="As Poniente">As Poniente</button>
    <button aria-label="Brisagua">Brisagua</button>
    <button aria-label="Coab">Coab</button>
    <button aria-label="Coapec">Coapec</button>
    <button aria-label="Cossbo">Cossbo</button>
    <button aria-label="Eap Cruceral">Eap Cruceral</button>
    <button aria-label="Essbio">Essbio</button>
    <button aria-label="Nuevosur">Nuevosur</button>
    <button aria-label="Sembcorp(Ex Aguas Chacabuco)">Sembcorp(Ex Aguas Chacabuco)</button>
    <button aria-label="Sembcorp(Ex Aguas Santiago)">Sembcorp(Ex Aguas Santiago)</button>
    <button aria-label="Sembcorp(Ex Aguas Servicomunal)">Sembcorp(Ex Aguas Servicomunal)</button> */}
  </Fragment>);
}
export default WaterCompanies;