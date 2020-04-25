import React from 'react';

const socialMedia=["fab fa-facebook-f","fab fa-linkedin-in","fab fa-twitter","fab fa-google-plus-g","fab fa-youtube"]

const Mininavbar = () => {
    return (
        <div className="mini-navbar"> 
<div className="navR"> <i class="far fa-clock"> <span>Lun - Ven: 9:00 - 17:00</span>

</i></div>
<ul class="list-social-media">
  {socialMedia.map(el=><li><i className={el}></i></li>)}
  </ul></div>
    );
};

export default Mininavbar;