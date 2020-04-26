import  React from 'react';

import "./team.css";



    
   
function Team(props)
{
    return (
       
 <div >
     <div className="bg-head" >
     

     </div>
    <div className="bg">
  
       
    <div className="section-title">
            <h1>Notre Equipe</h1>
             <h5>Equipe jeune ,Dynamique et creative.</h5>
               <h6>Heureux de vous compter parmis nous</h6>
        </div>

        <div class="pos">  

{props.Team.map(el=>

   <div div class="single-team">
                <img src={el.img} alt=""/>
                <div class="team-hover">
                    <h4>{el.name}<span>{el.poste}</span></h4>
                    
                    <a href=""><i class="fa fa-facebook"></i></a>
                    
                    <a href=""><i class="fa fa-linkedin"></i></a>
                </div>
            
         </div>    


 
    )}
	
		</div>
        </div>	
       
				
        <div className="description">
            <h2>Presentation</h2>
        
 <p>
 Notre équipe de spécialistes pédagogiques et techniques est organisée par pôle de compétences pour  accompagner nos apprenants tout au long du parcours de reconversion


 </p>
</div>    
<div className="espace"></div> 

      

</div>

      
       
       
			
				
       
       
      
    

    
			



);
};
export default Team;