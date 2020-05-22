import React from 'react';
import Machine from'./Machine';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>SLOT MACHINE</h1>
     <Machine

     S1='🍅'
     S2='🍊'
     S3='🍊'/>
        <Machine
     
     S1='🍅'
     S2='🍊'
     S3='🍓'/>


<Machine
     
     S1='🍓'
     S2='🍓'
     S3='🍓'/>
  <Machine
     
     S1='🍅'
     S2='🍊'
     S3='🍓'/>
     <Machine
     
     S1='🍓'
     S2='🍓'
     S3='🍓'/>

    </div>
    
  );
}

export default App;
