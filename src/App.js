import React from 'react';
import './App.css';
import Navbar from './ComponentSimplon/navbar'
import Caroussel from './ComponentSimplon/caroussel'
import Defsimplon from './ComponentSimplon/quoiSimplon'
import Impact from './ComponentSimplon/impact'
import Mininavbar from './ComponentSimplon/mininavbar'
import Reglement from './ComponentSimplon/reglement'


function App() {
  return (
    <div className="App">
      <Mininavbar />
     <Navbar />
     <Caroussel />
     <Defsimplon />
     <Impact />
     <Reglement />
     
    </div>
  );
}

export default App;
