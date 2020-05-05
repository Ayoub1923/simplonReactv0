import React from 'react';
import './App.css';
import Navbar from './ComponentSimplon/navbar'
import Caroussel from './ComponentSimplon/caroussel'

import Defsimplon from './ComponentSimplon/quoiSimplon'
import Impact from './ComponentSimplon/impact'
import Mininavbar from './ComponentSimplon/mininavbar'
import Reglement from './ComponentSimplon/reglement'
import Page from './comp1'
import "./comp.css"

import Team from './Team/team'
import mouna from './Team/mouna.jpg'
import  cyrine from './Team/cyrine.jpg'
import  hamza from './Team/hamza.jpg'
import Footer from  './footer'

import Partenaire from './ComponentSimplon/partenaire'
import Contact from './ComponentSimplon/contact'
import Main from './ComponentSimplon/main' 

const team = [
  {name:"Mouna Ayari",poste:"Gerant" ,img:mouna},
  {name:"Mohammed Seif Hamza",poste:"Formateur" ,img:hamza},
  {name:"Cyrine",poste:"chef de fabrique" ,img:cyrine}
    ]




function Ap() {
  return (
    <div className="App">
      <Main />
  
  
    </div>
  );
}

export default Ap;
