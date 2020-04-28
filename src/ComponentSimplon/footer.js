import React from 'react';
import img from './images/SIMPLON_TUNISIE1.png'
const footerEl=["A propos","Acceuil","Equipe","contact"]
const Footer = () => {
    return (
        <div className="footer">
           <ul className="footer-el">
             <li><img src={img}/></li>
             {footerEl.map(el=><li className="footer-els">{el}</li>)}
           </ul>


  </div>

    );
};

export default Footer;