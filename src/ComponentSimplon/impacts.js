import React from 'react';

const Impacts = (props) => {
    return (
    <li><h3>{props.elImp.number}</h3> <h4>{props.elImp.desc}</h4></li>
    );
};

export default Impacts;