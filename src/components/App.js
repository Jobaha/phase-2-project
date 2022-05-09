import React, { useState, useEffect } from "react";
import Home from "./Home";

function App() {

  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/toys`)
    .then(response => response.json())
    .then(data => setToys(data))
  },[])

  console.log(process.env.REACT_APP_API_URL)
  

  return (
    <div className="App">
      <Home />   
    </div>
  );
}

export default App;
