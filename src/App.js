import React from 'react';
import logo from './logo.svg';
import './App.css';
import At from "./components/Attitude";
import SG from "./components/StuGov";
import F from "./components/Friends";
import AC from "./components/ArtsCenter";
function App() {
  return (
    <div className="App">
      <At/>
      <F/>
      <AC/>
      <SG/>
    </div>
  );
}

export default App;
