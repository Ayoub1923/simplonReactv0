import React from 'react';
import reg from "./images/reg.png"

const reglement = () => {
    return (
        <div className="reglement">
            <h3>Veuillez trouver ci-joint notre réglement intérieur</h3>
            <ul className="down">
                <li><i class="fas fa-angle-double-down"></i></li>&nbsp;&nbsp;
                <li><i class="fas fa-angle-double-down"></i></li>&nbsp;&nbsp;
                <li><i class="fas fa-angle-double-down"></i></li>

            </ul>
          <a href="https://opencommons.simplon.co/thematiques/5"><img src={reg} alt="réglement intérieur" /></a>
        </div>
    );
};

export default reglement;