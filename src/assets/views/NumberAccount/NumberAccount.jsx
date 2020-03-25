import React, { Fragment } from 'react';
import '../Registeraccount/registeraccount.css';
import Header from '../../components/Headline';
import buscar from '../../img/buscar.png';
import Microphone from '../../components/btnMicrophone';
import { Link } from "react-router-dom";

const NumberAccount = () => {
return(
  <Fragment >
    <div className="containerOne">
<Header to="/" name="Busqueda por voz"/>
<p>Por favor, indica el numero de la cuenta</p>

<input
          placeholder="Número identificador de la cuenta"
          type="text"
          aria-label="Numero de cuenta"
          aria-required="true"
          name="ncuenta" 
        />
     <button >
        <Link to="/"><img src={buscar}  alt="buscar" /></Link>
        </button>  
     <Microphone/> 
     </div>
  </Fragment>

)
}
export default NumberAccount;