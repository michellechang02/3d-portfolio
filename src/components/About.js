import React from 'react'
import Bar from "../Bar";


function About() {
  return (
    <div>
        <Bar/>
        <div class="row" style={{display: "flex"}}>
            <div class="column" style={{flex: "50%"}}>
            <img style={{width: "70vh", align:"left"}}src={require("../images/prof_pic.jpg")}></img>
            </div>
            <div class="column" style={{flex: "50%"}}>
                <h1 style={{ color: 'pink', fontWeight: 'bold', fontSize: "50px" }}>Hi, I'm Michelle Chang!</h1>
                <p style={{fontSize:"large", fontFamily:"roboto, serif", color:"grey", 
          }}> 
            I'm a computer science student at the University of Pennsylvania.
            <br />
            My hobbies are violin, 3D animation, running, and swimming!
            <br />
            Contact me at: changmi@seas.upenn.edu
          </p>
            </div>
        </div>
    </div>
  )
}

export default About