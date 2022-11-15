import React from "react";

function Gallery(){
    return <div>

<div class="container  ">
  <div className="rows"  class="row  ">
    {/* <div class="col">
    <img width = "400" height = "300" src="https://picsum.photos/id/1026/300" class="gallery-item" alt="gallery"/>
    <p className="description">This website uses a 3rd party website to retrieve JSON data that can be iterated through to display different background images.</p>
    <a style={{marginRight: "10px"}}  href="https://bg-background.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/generator" class="btn btn-primary">View Code</a>
    </div> */}

    <div class="col">
    <img width = "400" height = "300" src="password.png" class="gallery-item" alt="gallery"/>
    <p className="description">Create randomly generated passwords based on the user's requirements.</p>
    <a style={{marginRight: "10px"}}  href="https://my-pass.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/my_password_generator" class="btn btn-primary">View Code</a>
    </div>

    <div class="col">
    <img width = "400" height = "300" src="artshow.png" class="gallery-item" alt="gallery"/>
    <p className="description">This a mock site for a photogropaher to display their previous work and provide a point of contact.</p>
    <a style={{marginRight: "10px"}}  href="https://sweet-biscuit-9f34e7.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/Artshow" class="btn btn-primary">View Code</a>
    </div>


  </div>

  <div className="rows" class="row">
  <div class="col">
    <img width = "400" height = "300" src="chatter.png" class="gallery-item" alt="gallery"/>
    <p className="description">This site uses google firebase authentication and databases. User can login to their gmail account to be entered into a real time chat room. </p>
    <a style={{marginRight: "10px"}}  href="https://gilded-cendol-caee02.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="javascript:void(0)" class="btn btn-primary">Private Code N/A</a>
    </div>

    
    <div class="col">
    <img width = "400" height = "300" src="jordan.jpeg" class="gallery-item" alt="gallery"/>
    <p className="description">Modeling portfolio developed for a model to display his photoshoots. This utilizes form submissions that are handled by netlify to deliver contact emails.  </p>
    <a style={{marginRight: "10px"}}  href="https://gregarious-liger-03b289.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/jordan-portfolio" class="btn btn-primary">View Code</a>
    </div>

    <div class="col">
    <img width = "400" height = "300" src="budget.png" class="gallery-item" alt="gallery"/>
    <p className="description">This web application is used to calculate a customizable expense budget. <br></br> This is built using React.js and utilizies hooks including useSate & useReducer. </p>
    <a style={{marginRight: "10px"}}  href="https://my-budgeting-app.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/budget-tracker" class="btn btn-primary">View Code</a>
    </div>

    {/* <div class="col">
    <img width = "400" height = "300" src="jordan.jpeg" class="gallery-item" alt="gallery"/>
    <p className="description">Modeling portfolio developed for a model to display his photoshoots. This utilizes form submissions that are handled by netlify to deliver contact emails.  </p>
    <a style={{marginRight: "10px"}}  href="https://gregarious-liger-03b289.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/jordan-portfolio" class="btn btn-primary">View Code</a>
    </div> */}

    
  </div>
  
 
</div>
       
</div>
}

export default Gallery;