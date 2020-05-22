import React from 'react';
import Machine from'./Machine';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className='container text-center'>
     <h1>SLOT - MACHINE</h1>
     <hr></hr>
     <Machine

     S1='🍅'
     S2='🍊'
     S3='🍊'/><hr></hr>
        <Machine
     
     S1='🍅'
     S2='🍊'
     S3='🍓'/><hr></hr>


<Machine
     
     S1='🍓'
     S2='🍓'
     S3='🍓'/><hr></hr>
  <Machine
     
     S1='🍅'
     S2='🍊'
     S3='🍓'/><hr></hr>
     <Machine
     
     S1='🍓'
     S2='🍓'
     S3='🍓'/><hr></hr>

    </div>
    
  );
}

export default App;
