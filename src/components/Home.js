import React from "react";
import NavBar from "./NavBar"
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";
import Phase5 from "./Phase5";
import Footer from "./Footer";
import Header from "./Header"


function Home({ resources }) {
    console.log(resources)
    return (
        <div>
        <Header />
        <NavBar />      
        <Phase1 resources={resources} />
        <Phase2 resources={resources} />
        <Phase3 resources={resources} />
        <Phase4 resources={resources} />
        <Phase5 resources={resources} />
        <Footer />
        </div> 
    )
}
   

export default Home;