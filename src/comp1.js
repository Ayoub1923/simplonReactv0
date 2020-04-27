import React from 'react';
import "./comp.css"
import Cards from './comp2';


const criteria=[
  {img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYfFcWEdSypyFnSQCiF1nL2b6eBUz5JGkQM0wPs10bxpVzEAZq", title:"Notre mission"  , description : "Des formations gratuites et intensives aux métiers en tension sur le marché du numérique."},
  {img : "https://www.primaressource.com/hubfs/images/Pourquoi_les_entrepreneurs_peuvent-ils_manquer_de_vision_stratgique.jpg", title:"Notre vision"  , description : "Un réseau de fabriques sociales, dédiées au numérique, en France et à l'étranger."},
  {img : "https://www.dynamique-mag.com/wp-content/uploads/e95182546f808ef7b9c8314fe8ccca3c-780x405.jpg" ,title:"Nos valeurs"  , description : "Un écosystème au coeur de la transformation numérique, des territoires et des entreprises."}
]


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
      <div className="objectives">
      {criteria.map(el=> <Cards obj={el}/>)}
      </div>

    </div>

  )
}


