import React from 'react'
import Bar from '../Bar'
import "./projects.css"

function Resume() {
  return (
    <div>
        <Bar/>
        <h1 style={{ color: 'pink', fontWeight: 'bold', fontSize: "50px" }}>Resume </h1>
        <img className="fadeIn" style={{width: "70vh", align:"left"}}src={require("../images/michelleFinalResume.png")}></img>
    </div>
  )
}

export default Resume