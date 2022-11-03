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
          <a className="link" class="nav-link active" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:097c1f4d-eafc-4299-8537-a61cd6f9e4f5">Resume <i class="fa-solid fa-file"></i></a>
          </li>
          <li class="nav-item">
          {/* <a className="link" class="nav-link active" href="https://newgendevs.herokuapp.com/">Blog <i class="fa-solid fa-blog"></i></a> */}
          </li>
      
        </ul>
      </div>
      
    </div>
  </nav>
    </div>
}

export default Navbar;