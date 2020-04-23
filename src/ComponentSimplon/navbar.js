import React from 'react'
import imgSimplon from './images/s.png'

const listes=["Acceuil","A propos","Equipe","Contact"]
const socialMedia=["fa fa-facebook fa-2x","fa fa-linkedin fa-2x","fa fa-google-plus fa-2x"]
const Navbar=()=>{
return(

<div className="nav">
    <img src={imgSimplon} alt="image-simplon" />
    <ul className="nav-listes">
{listes.map(el=><li className="nav-liste">{el}</li>)}
</ul>
<ul class="list-social-media">
  {socialMedia.map(el=><li><i className={el}></i></li>)}
  </ul>
  
  </div>


)

}
 export default Navbar
