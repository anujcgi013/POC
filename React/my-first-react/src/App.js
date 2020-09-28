import React, {useState} from "react";
// import logo from "./logo.svg";
import "./App.scss";
import AnujTag from "./component/nameTag"

const makeGreen = BaseComponent => props => {
  const addGreen= { 
    style:{
      color:"green"
    }
  }
   const newProps={
     ...props, ...addGreen
   }
return <BaseComponent {...newProps}/>
}

const GreenNameTag=makeGreen(AnujTag);

function App() {
  const [age, setAge]=useState(20);
  debugger;
  let ageUpHandle= ()=>setAge(age+1);
  let ageDownHandle= ()=> setAge(age-1);
  return (
    <>
    <button onClick={ageUpHandle}> Age Up</button>
    <button onClick={ageDownHandle}>Age Down</button>
    <h3>Age:{age}</h3>
    {/* <AnujTag firstName="Anuj" lastname=" Yadav"></AnujTag > */}
    <GreenNameTag firstName="Anuj" lastname=" Yadav"></GreenNameTag>
    {/* <div className="App">
      <header className="App-header"> */}
      
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header>
    </div> */}
    </>
    
    
  );
}

export default App;
