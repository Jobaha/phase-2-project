import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";
import Phase5 from "./Phase5";
import Form from "./Form";
import Header from "./Header";

function App() {

  
  const [flatsource, setFlatsource] = useState([])
  const [search , setSearch] = useState('')

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/flatsource`)
    .then(response => response.json())
    .then(data => setFlatsource(data))
  },[])

  console.log(flatsource)

  const addNewItem = (newItem) => {
    setFlatsource([...flatsource,newItem])
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredSources = flatsource.filter(source => source.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <Header search={search} handleSearch={handleSearch}/>
          
            <Switch>
              <Route path="/phase1">        
                <Phase1 resources={filteredSources} />
              </Route>
              <Route path="/phase2">                                 
                <Phase2  resources={filteredSources} />
              </Route>
              <Route path="/phase3">            
                <Phase3  resources={filteredSources} />
              </Route>
              <Route path="/phase4">                         
                <Phase4  resources={filteredSources} />
              </Route>
              <Route path="/phase5">
                <Phase5  resources={filteredSources} />
              </Route>
            </Switch>
               
        <Form addNewItem={addNewItem}/>   
    </div>
  );
};

export default App;
