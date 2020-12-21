import './App.css';
import React, { Component } from 'react';
import Task from './task/task'
import Finder from "./finder/finder"



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      buscando: '',
      //
      tasks : ["comprar pan", "dividir pan","vender pan" ]
    };
  }

  // esto es igual a un onChange
  miBuscador = (event) => {
    this.setState({ buscando: event.target.value });
  }
  
  pintarTareas = () => {
    return this.state.tasks
            .filter((el) => {
              return el.toLowerCase().includes(this.state.buscando.toLowerCase())
            })
            .map((valor) => {
              return <Task taskText={valor} />
            });
  }

render(){
  return (
    <div className="App">
      
      <Finder mb={this.miBuscador} />
      
      <main>
        <h1>Hola mundo <div>{/*console.log(tareas.tasks[1])*/}</div> </h1>
      </main>

      {this.pintarTareas()}
       
    </div>
  );
  }
}

export default App;
