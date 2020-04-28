import React from 'react'
import imgSimplon from './images/SIMPLON_TUNISIE.png'

const listes=["Acceuil","A propos","Equipe","Contact"]
const Navbar=()=>{
return(
<div className="nav">
    <img src={imgSimplon} alt="image-simplon" />
    <ul className="nav-listes">
{listes.map(el=><li className="nav-liste">{el}</li>)}

</ul>
</div>
  


)

}
 export default Navbar
 