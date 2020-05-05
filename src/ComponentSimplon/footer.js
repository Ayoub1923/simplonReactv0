import React from 'react';
import img from './images/SIMPLON_TUNISIE1.png'
import {Link } from 'react-router-dom'

const footerEl=[{name:"Acceuil",link:"/"},{name:"A propos",link:"about"},{name:"Equipe",link:"team"},{name:"Contact",link:"contact"}]
const Footer = () => {
    return (
        <div className="footer">
           <ul className="footer-el">
             <li><img src={img}/></li>
             {footerEl.map(el=><li className="footer-els"><Link className="af" to={el.link}>{el.name}</Link></li>)}
           </ul>


  </div>

    );
};

export default Footer;