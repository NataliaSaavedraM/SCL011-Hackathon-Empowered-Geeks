import React, { Fragment } from 'react';
import {Link } from "react-router-dom";
import '../Home/Home.css';
import botonregistrarnuevacuenta from '../../img/botonregistrarnuevacuenta.png';
//import Navigation from '../../components/Navigation';
const AcountRegistered = () => {
return(
  <Fragment >
<div className="containerOne">


     <p>Por favor, seleccione la cuenta a pagar</p>
     <ul role="Cuentas">
 
  <li role="cuenta registrada"  aria-setsize="1" aria-posinset="1" tabindex="0">Telefono Casa</li>
  <li role="cuenta registrada"  aria-setsize="2" aria-posinset="2" tabindex="0">Celular </li>
  <li role="cuenta registrada"  aria-setsize="3" aria-posinset="3" tabindex="0">Agua de mi casa </li>
</ul>
<button className="btnAccountMenu">
        <Link to="/RegistroDeCuenta"><img src={botonregistrarnuevacuenta}  alt="registrar nueva cuenta" /></Link>
        </button>
 {/* <Navigation /> */}
 </div>
  </Fragment>
);
};
export default AcountRegistered;