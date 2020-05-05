import  React from 'react';
import Map from './map'

import "./contact.css";



    
   
function Contact()
{
    return (
       
 <div >
     <div class="pos-form">
      <div className="formulaire">
          <h2>Formulaire de contact</h2>
     <form>
         
         <input type="text" className="t-input" placeholder="Nom & Prenom "></input><br></br><br></br>
         <input type="text" className="t-input" placeholder="Votre Email "></input><br></br><br></br>
         <input type="text" className="t-input" placeholder="N° Telephone "></input><br></br><br></br>
        
         <select className="t-input" name="pets" id="pet-select">
    <option value="">--Service Demandé--</option>
    <option value="Formation">Formation</option>
    <option value="Recrutement">Recrutement</option>
    <option value="partenariat">partenariat</option>
   
</select><br></br><br></br>
<textarea  className="t-input"rows="8" placeholder="Votre Message"></textarea><br></br>
<button class="send">Envoyer</button>
<br></br><br></br>
     </form>
     </div>
     <div className="information">
         <h2>Simplon Tunis</h2>
         <p>Un réseau de fabriques numériques </p>
         <h2>Contact</h2>
         <p><i class="fas fa-envelope"></i> Simplon@gmail.com </p>
         <p><i class="fas fa-phone"></i>95 85 24 56 </p>
         <p>
         <a href="#"><i class="fab fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;
            <a  href="#"><i class="fab fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;
           
            <a  href="#"><i class="fab fa-linkedin-in"></i></a>  &nbsp;&nbsp;&nbsp;
         </p>
         <h2>Adresse</h2>
         <p><i class="fa fa-map-marker-alt"></i>15 Avenue De Carthage, Tunis 1001 </p>



     </div>
     </div>
     <br></br><br></br>
     <div className="map-class">
     <Map />
     </div>
    
      
    

</div>




);
};
export default Contact;