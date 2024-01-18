
import React,{useState} from "react";
import './../styles/App.css';
//import { update } from "cypress/types/lodash";

const App = () => {
  const [text,setText]=useState("");
  function updateText(e){
    e.preventDefault();
    setText( "Hello "+e.target.value+"!");
  }
 
  return (
    <div>
      <label>Enter your name:</label>
      <br />
        <input type="text" onChange={updateText}></input>
             <p>{text}</p>
    </div>
  )
}

export default App
