import React from 'react'
import "./comp.css"

export default function Cards(props) {
  return (
      <div className="car">
        <h1 className="carTitle">{props.obj.title}</h1>
        <img className="pic" src={props.obj.img} alt="done"></img>
        <p className="descriptor">{props.obj.description}</p>
        <button class="further">Read more</button>
      </div>
  )
}
