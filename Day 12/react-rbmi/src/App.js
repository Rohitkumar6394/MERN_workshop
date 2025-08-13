// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar  from './Navabar.jsx';

function App() {
  const style = {
    "backgroundColor": "yellow",
  }


  return (
    <div>
      <h1 style={style.color}> Welcome to h1</h1>
      <h6 style={{"color":"red"}}> hello h6 </h6> 

      <Navbar/>
      
    </div>
  );
}
export default App;
