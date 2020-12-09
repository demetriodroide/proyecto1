import './App.css';
import React, { Component } from 'react';
import Task from './task/task'
import Finder from "./finder/finder"



class App extends Component() {
  // let myCompany = "Grupo ACME, S.A.";
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  miBuscador = (event) => {
    this.setState({username: event.target.value});
  }

render(){

  return (
    <div className="App">
      
      <Finder />
      
      <main>
        <h1>Hola mundo</h1>
      </main>
      
      <Task />
       
    </div>
  );
  }
}

export default App;
