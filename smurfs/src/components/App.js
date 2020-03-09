import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios';

import SmurfContext from '../contexts/SmurfContext';
import SmurfList from './Characters/SmurfList';

const App = () => {
  const [smurf, setSmurf] = useState([]);

  // const addSmurf = smurfs => {
  //   setSmurf([...smurf, smurfs])
  // };

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        //console.log(response);
        setSmurf(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  return (
    <div className="App">
      <SmurfContext.Provider value={smurf}>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
