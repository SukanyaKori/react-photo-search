import React from 'react'
import './App.css';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">

      <div className="container">
        <h1 style={{ marginleft: 200,marginTop:20, textAlign: "center" ,alignContent:"center"}}>Image Search App</h1>
        <h4 style={{ marginleft: 200, textAlign: "center",alignContent:"center" }}>using React js</h4>
        <Search />


      </div>
    </div>
  )
}

export default App






