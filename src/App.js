import React from 'react';
import './App.css';
import Navbar from './ComponentSimplon/navbar'
import Caroussel from './ComponentSimplon/caroussel'
import Defsimplon from './ComponentSimplon/quoiSimplon'
import Impact from './ComponentSimplon/impact'
import Mininavbar from './ComponentSimplon/mininavbar'
import Reglement from './ComponentSimplon/reglement'
import Partenaire from './ComponentSimplon/partenaire'
import Contact from './ComponentSimplon/contact'
import Footer from './ComponentSimplon/footer'
function App() {
  return (
    <div className="App">
      <Mininavbar />
     <Navbar />
     <Caroussel />
     <Defsimplon />
     <Impact />
     <Reglement />
     <Partenaire />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
