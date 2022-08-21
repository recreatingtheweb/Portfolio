import React from "react";

function Contactform(){
    return <div>

        <form action="" data-netlify="true">
      <div class="title">
        <h2>CONTACT</h2>
      </div>
      <div class="half">
        <div class="item">
          <label for="name">NAME</label>
          <input type="text" id = "name"/>
        </div>
        <div class="item">
          <label for="email">EMAIL</label>
          <input type="text" id = "email"/>
        </div>
      </div>
      <div class="full">
        <label for="message">MESSAGE</label>
        <textarea name="" id = "message"></textarea>
      </div>
      <div class="action">
        <input type="submit" value = "SEND MESSAGE"/>
        <input type="reset" value = "RESET"/>
      </div>
      
    </form>


    </div>
}

export default Contactform;