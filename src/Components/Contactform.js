import React from "react";

function Contactform(){
    return <div>

<form action="/Home" name="contact" method="post" data-netlify="true">
<input type="hidden" name="my-form" value="contact" />
      <div class="title">
        <h2>CONTACT</h2>
      </div>
      <div class="half">
        <div class="item">
          <label for="name">NAME</label>
          <input name="name" type="text" />
        </div>
        <div class="item">
          <label for="email">EMAIL</label>
          <input name="email" type="text" />
        </div>
      </div>
      <div class="full">
        <label for="message">MESSAGE</label>
        <textarea name="message"></textarea>
      </div>
      <div class="action">
        <input type="submit" value = "SEND MESSAGE"/>
        <input type="reset" value = "RESET"/>
      </div>
      
    </form>


    </div>
}

export default Contactform;