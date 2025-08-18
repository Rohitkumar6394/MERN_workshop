// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {Todo} from "./MyComponents/Todo";
// import React from 'react';
// import Navbar  from './Navabar.jsx';

function App() { 
  const onDelete=()=>{
    console.log("I am ondelete of todo",todos);
  }
  let todos = [
  {
    sno: 1,  
    title:"Go to the market",
    desc: "you need to go the this job done"
  },
  {
    sno: 2,
    title:"Go to the mall",
    desc: "you need to go the this job done"
    
  },
  {
    sno: 3,
    title:"Go to the ghat",
    desc: "you need to go the this job done"
  }
]
   


  return (
    <> 
      <Header title="My Todos List" searchBar={false}/>
      <Todos  Todos={todos}/>
      <Footer/>
     </>
  );
}
export default App;
