import React from'react'
import Etapes from './etapes'

const parcours=[{logo:"fas fa-flag-checkered",title:"Félicitation ,vous étes simplonien",desc:"Initiez-vous gratuitement au notre formation sur notre plateforme en ligne"},{logo:"fas fa-laptop-code",title:"840 HEURES DU CODING RÉPARTIS SUR 6 MOIS",desc:"Le programme de formation couvre les 4 technologies web les plus utilisées sur le web : HTML, CSS, JavaScript,SQL."},{logo:"fas fa-user-graduate",title:"Félicitation ,vous étes développeur Full Stack",desc:"Certification de niveau 5 (équivalent bac +2)"},{logo:"fas fa-theater-masks",title:"EN ACTIVITÉ PROFESSIONNELLE",desc:"Salarié en entreprise,free-lance ou créateur de startup."}]

const Defsimplon = () =>{

    return(
    <div className="what_simplon">
 <h2 className="fromRight">SIMPLON C’EST QUOI ?</h2>
 <p>Créée en France en 2013 et agréée dès 2014 Entreprise Solidaire d’Utilité Sociale (ESUS) avec l’ambition de faire du numérique un levier d’inclusion, d’insertion, d’emploi, de mixité, de diversité et d’innovation sociales, Simplon est le premier réseau français de formations gratuites labellisées par l‘État Grande École du Numérique – également le plus inclusif, et le plus déployé à l’international. Simplon est engagé pour une transformation inclusive des territoires fragiles (urbains, ruraux et ultramarins) en France mais aussi à l'international avec une présence dans plus de 15 pays¹ sur 4 continents.</p>
  <h1>DEVENEZ UN VÉRITABLE DÉVELOPPEUR JAVASCRIPT</h1>
  <ul className="listes_activity">
   {parcours.map(el => <Etapes etape={el}   />)}
   </ul>

   <a href="https://drive.google.com/drive/folders/1nZeFxKwWtA1et9w2g2sEMte_Kon7H8t4" className="btn">En savoir plus</a>

   
    </div>

    )

}
export default Defsimplon