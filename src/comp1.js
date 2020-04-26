import React from 'react';
import "./comp.css"

export default function Page() {
  return (
    <div className="hello">
      <div className="intro">
        <div class="about">
            <h1>Qui sommes nous?</h1>
            <p className="simp"><i>Simplon Tunisie est une entreprise sociale qui propose des formations présentielles          gratuites aux métiers techniques du numérique en forte tension et ce en priorité aux          profils sous-représentés dans le métiers TIC (jeunes peu ou pas diplômés, demandeurs        d'emploi, réfugiés) avec un objectif de parité femmes - hommes.</i></p>
        </div>
        <iframe className="video" width="40%" height="400px" title="vid" src="https://www.youtube.com/embed/ePzhdkG2ZxQ" allowfullscreen></iframe>
      </div>
     
    </div>

  )
}


