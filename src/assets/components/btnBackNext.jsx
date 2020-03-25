import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import '../components/btnBackNext.css';
import arrowBaack from '../img/arrowBaack.png';
import arrowNext from '../img/arrowNext.png'

class BtnBackNext extends Component {
    render(){
        return(
            <Fragment>
                 <button className="btn-arrow"><Link to={this.props.to}><img src={arrowBaack}/></Link></button>
            <button  className="btn-arrow"><Link to={this.props.too}><img src={arrowNext}/></Link></button>
            </Fragment>
           
        )
    }
}

export default BtnBackNext ;