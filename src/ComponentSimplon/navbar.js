import React from 'react'
import imgSimplon from './images/SIMPLON_TUNISIE.png'
import { BrowserRouter, Route, Link } from 'react-router-dom'


const listes=[{name:"Acceuil",link:"/"},{name:"A propos",link:"about"},{name:"Equipe",link:"team"},{name:"Contact",link:"contact"}]
const Navbar=()=>{
return(
<div className="nav">
    <img src={imgSimplon} alt="image-simplon" />
    <ul className="nav-listes">
{listes.map(el=><li className="nav-liste"><Link className="a" to={el.link}>{el.name}</Link></li>)}

</ul>
</div>
  


)

}
 export default Navbar
 