import React from 'react';

const socialMedia=[{lien:"https://www.facebook.com/SimplonTunis/",logo:"fab fa-facebook-f"},{lien:"https://www.linkedin.com/company/simplon-tunis",logo:"fab fa-linkedin-in"},{lien:"",logo:"fab fa-twitter"},{lien:"",logo:"fab fa-google-plus-g"},{lien:"https://www.youtube.com/channel/UCTFYd2sOfjrJH1C421UyYuQ",logo:"fab fa-youtube"}]

const Mininavbar = () => {
    return (
        <div className="mini-navbar"> 
<div className="navR"> <i class="far fa-clock"> <span>Lun - Ven: 9:00 - 17:00</span>

</i></div>
<ul class="list-social-media">
  {socialMedia.map(el=><a href={el.lien}><li><i className={el.logo}></i></li></a>)}
  </ul></div>
    );
};

export default Mininavbar;