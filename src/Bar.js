import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./App.css"

const Bar = () => {
  return (
    <Navbar className="justify-content-center" bg="myBlue" variant="light">
        
        
        <Link className="navbar-link" to={{pathname: "/"}}>Home</Link>
        <Link className="navbar-link" to={{pathname: "/about"}}>About</Link>
        <Link className="navbar-link" to={{pathname: "/projects"}}>Projects</Link>
        <Link className="navbar-link" to={{pathname: "/resume"}}>Resume</Link>
    </Navbar>
  ) 
}

export default Bar