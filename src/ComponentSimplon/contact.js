import React from 'react';
import i4 from './images/Soc_twit.png'
import i5 from './images/Soc_fb.png'
import i6 from './images/Soc_yt.png'

const Contact = () => {
    return (
        <ul className="contact">
        <li className="contact-word1"><a href="https://twitter.com/simplonco?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" ><h5>Trouvez-nous sur</h5><h1>TWITTER</h1></a></li> 
       <li className="contact-word2"><a href="https://www.facebook.com/SimplonTunis/" >  <h5>Trouvez-nous sur</h5><h1>FACEBOOK</h1> </a> </li>
         <li className="contact-word3"><a href="https://www.youtube.com/channel/UCTFYd2sOfjrJH1C421UyYuQ" >  <h5>Trouvez-nous sur</h5><h1>YOUTUBE</h1></a> </li>


            
        </ul>
    );
};

export default Contact;