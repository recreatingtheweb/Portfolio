import React from "react";

function Gallery(){
    return <div>

<div class="container  ">
  <div style={{marginLeft: "30px"}} class="row  ">
    <div class="col">
    <img width = "400" height = "300" src="https://picsum.photos/id/1026/300" class="gallery-item" alt="gallery"/>
    <p className="description">This website uses a 3rd party website to retrieve JSON data that can be iterated through to display different background images.</p>
    <a style={{marginRight: "10px"}}  href="https://bg-background.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/generator" class="btn btn-primary">View Code</a>
    </div>

    <div class="col">
    <img width = "400" height = "300" src="https://picsum.photos/id/1037/300" class="gallery-item" alt="gallery"/>
    <p className="description">This a mock site for a photogropaher to display their work.</p>
    <a style={{marginRight: "10px"}}  href="https://sweet-biscuit-9f34e7.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/Artshow" class="btn btn-primary">View Code</a>
    </div>


  </div>

  <div style={{marginLeft: "30px"}} class="row">
  <div class="col">
    <img width = "400" height = "300" src="chatter.png" class="gallery-item" alt="gallery"/>
    <p className="description">This site uses google firebase authentication and databases. User can login to their gmail account to be entered into a real time chat room. </p>
    <a style={{marginRight: "10px"}}  href="https://gilded-cendol-caee02.netlify.app/" class="btn btn-primary">View Site</a>
    {/* <a  href="https://github.com/recreatingtheweb/chatbox" class="btn btn-primary">View Code</a> */}
    </div>

    
    <div class="col">
    <img width = "400" height = "300" src="jordan.jpeg" class="gallery-item" alt="gallery"/>
    <p className="description">Modeling portfolio developed for a model to display his photoshoots. This utilizes form submissions that are handled by netlify to deliver contact emails.  </p>
    <a style={{marginRight: "10px"}}  href="https://gregarious-liger-03b289.netlify.app/" class="btn btn-primary">View Site</a>
    <a  href="https://github.com/recreatingtheweb/jordan-portfolio" class="btn btn-primary">View Code</a>
    </div>
  </div>
  
 
</div>
       
</div>
}

export default Gallery;