import React, { useState, useEffect } from "react";
import Home from "./Home";

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
      <Home resources={flatsource} />   
    </div>
  );
}

export default App;
