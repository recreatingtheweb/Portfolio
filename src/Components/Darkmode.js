import React from "react";

let testBool = true;


function EnabledarkMode()
{
    testBool = !testBool;

    var x = document.getElementsByTagName("body")[0];
    var y = document.getElementById('dark-mode');
    var z = document.getElementsByTagName("p");
    var h1 = document.getElementsByTagName("h1");
    var links = document.getElementsByTagName('a');


    if(testBool == false){

        y.innerHTML = "Dark Mode";
        x.style.backgroundColor = "white";
            for(var i=0; i<z.length; i++)
            {
                z[i].style.color = "black";
            }
            for(var i=0; i<h1.length; i++)
            {
                h1[i].style.color = "black";
            }
            for(var i=0; i<links.length; i++)
            {
                links[i].style.color = "black";
            }

        
    }
    if(testBool == true){
        y.innerHTML = "Light Mode";
        x.style.backgroundColor = "black";
        for(var i=0; i<z.length; i++)
        {
            z[i].style.color = "white";
        }
        for(var i=0; i<h1.length; i++)
        {
            h1[i].style.color = "white";
        }
        for(var i=0; i<links.length; i++)
        {
            links[i].style.color = "white";
        }



    }
    
    // document.querySelectorAll('p').forEach(e => e.style.color = "black");
    // document.querySelectorAll('h1').forEach(e => e.style.color = "black");

    // var links = document.getElementsByTagName('a');
    // for (var i = 0; i < links.length; i++) {
    //     links[i].style.color = "black";
    //     }
 

   


}

function Darkmode(){
    return <div>
        <div id="button-container">
        <button onClick={EnabledarkMode} class="btn btn-primary"  id="dark-mode" type="button" >Light Mode</button>
        </div>
    </div>

}

export default Darkmode;