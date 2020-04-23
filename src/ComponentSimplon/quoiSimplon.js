import React from'react'
import Etapes from './etapes'

const parcours=[{logo:"fas fa-flag-checkered",title:"félicitation ,vous étes simplonien",desc:"bienvenue parmis simplon"},{logo:"fas fa-laptop-code",title:"félicitation ,vous étes simplonien",desc:"bienvenue parmis simplon"},{logo:"fas fa-user-graduate",title:"félicitation ,vous étes simplonien",desc:"bienvenue parmis simplon"},{logo:"fas fa-theater-masks",title:"félicitation ,vous étes simplonien",desc:"bienvenue parmis simplon"}]

const Defsimplon = () =>{

    return(
    <div className="what_simplon">
 <h2 className="fromRight">SIMPLON C’EST QUOI ?</h2>
 <p>Créée en France en 2013 et agréée dès 2014 Entreprise Solidaire d’Utilité Sociale (ESUS) avec l’ambition de faire du numérique un levier d’inclusion, d’insertion, d’emploi, de mixité, de diversité et d’innovation sociales, Simplon est le premier réseau français de formations gratuites labellisées par l‘État Grande École du Numérique – également le plus inclusif, et le plus déployé à l’international. Simplon est engagé pour une transformation inclusive des territoires fragiles (urbains, ruraux et ultramarins) en France mais aussi à l'international avec une présence dans plus de 15 pays¹ sur 4 continents.</p>
  <h1>DEVENEZ UN VÉRITABLE DÉVELOPPEUR JAVASCRIPT</h1>
  <ul className="listes_activity">
   {parcours.map(el => <Etapes etape={el}   />)}
   </ul>

   <button>read more</button>

   
    </div>

    )

}
export default Defsimplon