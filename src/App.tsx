import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
   <div>
     <h1> HELLO JOY, WELCOME TO MY WEBSITE TEST TEST TEST</h1>
     <Link to="/about">About</Link>
    <h2>Github Pages</h2>
    <h3>Deploying React to Github</h3>
   </div>
 );
}


/*
export default App;
function App() {
  return (
   <div>
    <h2>Github Pages</h2>
    <h3>Deploying React to Github</h3>
   </div>
  );
}
*/


/*
export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
