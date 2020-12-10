import './App.css';
import React, { Component } from 'react';
import Task from './task/task'
import Finder from "./finder/finder"



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      buscando: '',
      tasks : ["comprar pan", "dividir pan","vender pan" ]
    };
  }

  miBuscador = (event) => {
    //console.log(this.state.username);
    this.setState({buscando: event.target.value});
  }

  pintarTareas = () => {
    return /* tantos <Task ... > como tareas hay en mi state*/
    <Task taskText={this.state.tasks[1]} />
  }

render(){

  return (
    <div className="App">
      
      <Finder ph="hola" mb={this.miBuscador} />
      
      <main>
        <h1>Hola mundo <div>{/*console.log(tareas.tasks[1])*/}</div> </h1>
      </main>

      {this.pintarTareas()}
       
    </div>
  );
  }
}

export default App;
