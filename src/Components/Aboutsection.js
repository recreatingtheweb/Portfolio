import React from "react";
import { Link } from "react-router-dom";

function Aboutsection(){
    return <div>
    
        <div class="row featurette ">
                <div  class="col-md-7 homepage-text">
                    <div className="About-section">   
                            <h1 class="featurette-heading">About Me </h1>
                            <p >Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            <Link to="/contact" class="btn btn-lg btn-secondary fw-bold border-white bg-dark">Contact Me</Link>
                    </div>
                </div>
                
            </div>        
    </div>
}

export default Aboutsection;