import React from "react";
import { Link } from "react-router-dom";



function About(){
    return <div>
        <p className="about">I am passionate about building web apps that create value for individuals and businesses. <br></br> Striving to create responsive designs that provide a great  experience across all users and devices. </p>
        <div id="button-container">
        <Link className="link" class="nav-link active" aria-current="page" to="/portfolio">

         <button style={{marginBottom: "20px"}}  class="btn btn-dark"  id="dark-mode" type="button" >View Projects</button>
         </Link>
        </div>

    </div>
}

export default About; 