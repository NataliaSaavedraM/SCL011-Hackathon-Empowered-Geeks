import React, { Fragment } from 'react';
import luz from '../img/luz.png';
import agua from '../img/agua.png';
import gas from '../img/gas.png';
import telefono from '../img/telefono.png';
import internet from '../img/internet.png';
import tvcable from '../img/tvcable.png';
import './accountMenu.css';
import { Link } from "react-router-dom";


const accountmenu = () => {

  //let message = document.querySelector('#message');
  const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const SpeechGrammarList = window.webkitSpeechGrammarList || window.SpeechGrammarList;
  // const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  // const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

  let grammar = '#JSGF V1.0;'

  let recognition = new SpeechRecognition();
  let speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'es';
  recognition.interimResults = false;

  recognition.onresult = function (event) {
    let last = event.results.length - 1;
    let command = event.results[last][0].transcript;
    //message.textContent = 'Voice Input: ' + command + '.';
    console.log('Voice Input: ' + command);

    if (command.toLowerCase() === 'seleccionar luz') {
      let lightSelection = document.getElementById('luz');
      lightSelection.click();
      console.log("DOMelement:", lightSelection);
      console.log("click en luz");
    }
    else if (command.toLowerCase() === 'seleccionar agua') {
      document.querySelector('#agua').click();
    }
    else if (command.toLowerCase() === 'seleccionar gas') {
      document.querySelector('#gas').click();
    }
    else if (command.toLowerCase() === 'seleccionar teléfono') {
      document.querySelector('#telefono').click();
    } else if (command.toLowerCase() === 'seleccionar internet') {
      document.querySelector('#internet').click();
    } else if (command.toLowerCase() === 'seleccionar cable') {
      document.querySelector('#cable').click();
    }
  };

  recognition.onspeechend = function () {
    recognition.stop();
  };

  recognition.onerror = function (event) {
    console.log('Error occurred in recognition: ' + event.error);
  };
  // const botonVoz = document.getElementById('escuchar')
  // botonVoz.addEventListener('click', function(){
  //     recognition.start();

  // });

  function simulateClick(event) {
    console.log("simulateClick");
  }

  //const inputRef = React.useRef(null)


  return (

    <Fragment>
      <div className="accountMenu">
      
          <Link to="/Luz" className="btnAccountMenu">
          <button id="luz"   className="btn"ref={simulateClick} onClick={() => console.log('clicked')}><img src={luz} className="imgAccount" alt="luz" /></button></Link>
        
        
        <Link to="/Agua" className="btnAccountMenu">
        <button id="agua"  className="btn" ref={simulateClick} onClick={() => console.log('clicked')}><img src={agua} className="imgAccount" alt="agua" /></button></Link>
        
        
        <Link to="/Gas" className="btnAccountMenu">
        <button id="gas" className="btn"  ref={simulateClick} onClick={() => console.log('clicked')}><img src={gas} className="imgAccount" alt="gas" /></button></Link>
        
        
        <Link to="/TelefonoMovil" className="btnAccountMenu">  
        <button id="telefono" className="btn" ref={simulateClick} onClick={() => console.log('clicked')}><img src={telefono} className="imgAccount" alt="telefono" /></button></Link>
        
        
        
        <Link to="/TelefonoFijoInternet" className="btnAccountMenu">  
        <button id="internet" className="btn" ref={simulateClick} onClick={() => console.log('clicked')}><img src={internet} className="imgAccount" alt="internet" /></button>
        </Link>
        
        
          <Link to="/TvCable/Satelital" className="btnAccountMenu">  
          <button id="cable" className="btn" ref={simulateClick} onClick={() => console.log('clicked')}><img src={tvcable} className="imgAccount" alt="tvcable" /></button>
          </Link>
          {/* <div>
          <Link to="/" className="arrow"><i class="fas fa-arrow-left"></i></Link>
          <Link to="/" className="arrow"><i class="fas fa-arrow-right"></i></Link>
        </div> */}
        <button id="escuchar" className="btn-volume" onClick={recognition.start()}><i class="fas fa-microphone fa-7x"></i></button>

      </div>
    </Fragment>)
};
export default accountmenu;
