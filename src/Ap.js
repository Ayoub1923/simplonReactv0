import React from 'react';
import './App.css';
import Navbar from './ComponentSimplon/navbar'
import Caroussel from './ComponentSimplon/caroussel'

import Defsimplon from './ComponentSimplon/quoiSimplon'
import Impact from './ComponentSimplon/impact'
import Mininavbar from './ComponentSimplon/mininavbar'
import Reglement from './ComponentSimplon/reglement'


import Team from './Team/team'
import mouna from './Team/mouna.jpg'
import  cyrine from './Team/cyrine.jpg'
import  hamza from './Team/hamza.jpg'

import Footer from './footer/footer'

const team = [
  {name:"Mouna Ayari",poste:"Gerant" ,img:mouna},
  {name:"Mohammed Seif Hamza",poste:"Formateur" ,img:hamza},
  {name:"Cyrine",poste:"chef de fabrique" ,img:cyrine}
    ]




function Ap() {
  return (
    <div className="App">
      <Mininavbar />
     <Navbar />

     <Caroussel />
     <Defsimplon />
     <Impact />
     <Reglement />
     

  <Team Team={team}/>
     <Footer />
    
  
    
>>>>>>> marwa
    </div>
  );
}

export default Ap;
