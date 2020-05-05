import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Mininavbar from './mininavbar'
import Navbar from './navbar'
import Caroussel from './caroussel'
import Defsimplon from './quoiSimplon'
import Impact from './impact'
import Page from '../comp1'
import  T from '../Team/team'
import Reglemnet from './reglement'
import Partenaire from './partenaire'
import Contact from './contact'
import Footer from './footer'
import mouna from '../Team/mouna.jpeg'
import  cyrine from '../Team/cyrine.jpg'
import  hamza from '../Team/hamza.jpg'
import Contact1 from '../Contact/contact'
import Map from '../Contact/map'

const team = [
    {name:"Mouna Ayari",poste:"Gerant" ,img:mouna},
    {name:"Mohammed Seif Hamza",poste:"Formateur" ,img:hamza},
    {name:"Cyrine",poste:"chef de fabrique" ,img:cyrine}
      ]
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/'>   <Mininavbar />
     <Navbar />
     <Caroussel />
     <Defsimplon />
     <Impact />
     <Reglemnet />
     <Partenaire /> 
     <Contact />
     <Footer />
     
     </Route>
      <Route path='/about'> <Mininavbar />
     <Navbar /> <Page />     <Footer />

 </Route>
 <Route path='/team'>     <Mininavbar />
     <Navbar />
     < T Team={team} />
     <Footer />

 </Route>
 <Route path='/contact'>  <Mininavbar />
     <Navbar /> <Contact1 /> <Map />    <Footer />   
 </Route>
 

    </Switch>
  </main>
)

export default Main
