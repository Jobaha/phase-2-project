import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";
import Phase5 from "./Phase5";
import Footer from "./Footer";
import Header from "./Header";

function App() {

  
  const [flatsource, setFlatsource] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/flatsource`)
    .then(response => response.json())
    .then(data => setFlatsource(data))
  },[])

  console.log(flatsource)
  

  return (
    <div className="App">
      <Header />
          
            <Switch>
              <Route path="/phase1">        
                <Phase1 resources={flatsource} />
              </Route>
              <Route path="/phase2">                                 
                <Phase2  resources={flatsource} />
              </Route>
              <Route path="/phase3">            
                <Phase3  resources={flatsource} />
              </Route>
              <Route path="/phase4">                         
                <Phase4  resources={flatsource} />
              </Route>
              <Route path="/phase5">
                <Phase5  resources={flatsource} />
              </Route>
            </Switch>
               
        <Footer />   
    </div>
  );
};

export default App;
