import React, { useState, useEffect }  from "react";
import "./App.css";

import axios from 'axios';

const App = () =>  {
  const [smurf, setSmurf] = useState([]);

useEffect(() => {
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    console.log(response);
    setSmurf(response.data);
  })
  .catch(error => {
    console.log(error)
  });
}, []) 
  
    return (
      <div className="App">
    
      </div>
    );
  
}

export default App;
