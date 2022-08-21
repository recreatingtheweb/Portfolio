import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Stack from "./Components/Stack";
import About from "./Components/About";
import Darkmode from "./Components/Darkmode";
import Aboutsection from "./Components/Aboutsection";

function Home(){
    return <div>
        <Navbar/>
        <Intro/>
        {/* <Darkmode/> */}
        <About/>
        <Stack/>
    </div>
}

export default Home;