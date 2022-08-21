import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return <div>
      <nav class="navbar navbar-expand-lg navbar-dark " aria-label="Tenth navbar example">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link   className="link" class="nav-link active" aria-current="page" to="/">Home <i class="fa-solid fa-house"></i></Link>
          </li>
          <li class="nav-item">
          <Link className="link" class="nav-link active" aria-current="page" to="/portfolio">Portfolio <i class="fa-solid fa-folder-open"></i></Link>
          </li>
          <li class="nav-item">
          <Link className="link" class="nav-link active" aria-current="page" to="/contact">Contact <i class="fa-solid fa-envelope"></i></Link>
          </li>
          <li class="nav-item">
          <a  className="link"class="nav-link active" href="https://github.com/recreatingtheweb">Github <i class="fa-brands fa-github"></i></a>
          </li>
          <li class="nav-item">
          <a className="link" class="nav-link active" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:0e8e293c-5376-42f8-9af3-c381f523fed3">Resume <i class="fa-solid fa-file"></i></a>
          </li>
      
        </ul>
      </div>
      
    </div>
  </nav>
    </div>
}

export default Navbar;