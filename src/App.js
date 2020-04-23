import React from 'react';
import './App.css';
import Navbar from './ComponentSimplon/navbar'
import Caroussel from './ComponentSimplon/caroussel'
import Defsimplon from './ComponentSimplon/quoiSimplon'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Caroussel />
     <Defsimplon />
    </div>
  );
}

export default App;
