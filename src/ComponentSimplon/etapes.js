import React from 'react';

const Etapes = (props) => {
    return (
           
         <li><i className= {props.etape.logo}></i> <h5>{props.etape.title}</h5><p>{props.etape.desc}</p></li>   
    );
};

export default Etapes;