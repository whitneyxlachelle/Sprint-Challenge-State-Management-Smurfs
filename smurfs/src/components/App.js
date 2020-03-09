import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios';

import SmurfContext from '../contexts/SmurfContext';
import SmurfList from './Characters/SmurfList';
import SmurfForm from "./Characters/SmurfForm";

const App = () => {
  const [smurf, setSmurf] = useState([]);

  // const addSmurf = smurfs => {
  //   setSmurf([...smurf, smurfs])
  // };

  const addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        setSmurf(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  };

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
      <SmurfContext.Provider value={{ smurf, addSmurf }}>
        <SmurfList />
        <SmurfForm />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
