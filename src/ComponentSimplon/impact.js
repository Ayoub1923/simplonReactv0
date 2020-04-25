import React from 'react'
import Impacts from "./impacts"

const impact=[{number:7180,desc:"Simploniens dans le monde"},
{number:111,desc:"Fabriques dans le monde"},
{number:1000 ,desc:"personnes formées par an "},
{number:"72%" ,desc:"De sorties positives après la formation dans le monde"},
]
const Impact =() =>{

    return (
        <div className="impact">
           <h2>Notre Impact</h2>
    <ul className="impact_data">
        {impact.map(el=><Impacts elImp={el} />)}
        </ul>
        </div>
    )
}
export default Impact