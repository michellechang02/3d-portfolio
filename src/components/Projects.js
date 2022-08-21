import React from 'react'
import Bar from "../Bar"
import "./projects.css"

function Projects() {
  return (
    <div>
        <Bar/>
        <h1 style={{ color: 'pink', fontWeight: 'bold', fontSize: "50px" }}> Projects</h1>
        <section className="fadeIn" style={{textAlign: "left", margin: "40px", backgroundColor: "	#f2f2f2"}}>
            <h1 style={{margin: "30px 10px"}}>Penn Medicine: Davis Lab</h1>
            <div class="row" style={{display: "flex"}}>
            <div class="column" style={{flex: "50%"}}>
            <img style={{width: "70vh", align:"left", margin: "15px"}}src={require("../images/project1.png")}></img>
            </div>
            <div class="column" style={{flex: "50%"}}>
               
                <p style={{fontSize:"large", fontFamily:"roboto, serif", color:"grey", margin:"0px 20px"
          }}> 
            During this 10 week program, I created a full-stack 3D Model Viewer given a CSV file, an atlas, and a color picker 
            for epilepsy patients. Technologies I used were React.js, Node.js, Express, Python, and Blender. This project augmented
            my 3D front-end application skills while also formally introducing me to a full-stack Javascript framework. Furthermore,
            working under the Center for Neuroengineering and Therapeutics, I was able to see directly how my visualization tool that converted
            numeric and 2D information to 3D bolstered communication between Penn Medicine doctors and their patients; patients could directly see 
            their own data in the color they wanted, with the brain model (atlas) they wanted, and they thus more easily understood their condition.
            
          </p>
            </div>
        </div>
            
        </section>

        <section className="fadeIn" style={{textAlign: "right", margin: "40px", backgroundColor: "	#f2f2f2"}}>
            <h1 style={{margin: "10px 30px"}}>Samsung Medical Center</h1>
            <div class="row" style={{display: "flex"}}>
            <div class="column" style={{flex: "50%"}}>
            <p style={{fontSize:"large", fontFamily:"roboto, serif", color:"grey", margin: "30px"
          }}> 
            In this 6 week internship, I programmed an application converting CSV files to 3D bar graphs in Blender. This program was effective because in the busy 
                        lab, my lab partners needed to see right away whether their 
                        data followed the expected trend, and my program 
                        expedited that process. Check out the sample below: 
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_5MHASC5rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="column" style={{flex: "50%"}}>
            <img style={{width: "70vh", align:"left", margin: "15px"}}src={require("../images/certificate.png")}></img>
            </div>
        </div>
            
        </section>
    
    </div>
  )
}

export default Projects