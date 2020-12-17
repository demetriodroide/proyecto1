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
    //console.log(this.state.username);
    let buscando = event.target.value;
    
    console.log(this.state.tasks.indexOf(buscando),
    this.state.tasks.filter((el) => { return el.toLowerCase().includes(buscando.toLowerCase())}))
  

   this.state.tasks.filter((el) => { return el.toLowerCase().includes(buscando.toLowerCase())})
  
      this.setState({buscando: buscando});
  }
  
  pintarTareas = () => {
    return this.state.tasks.map((valor) => {
      return <Task taskText={valor} />
    }) 
  
  }

/*
pintarTareas = () => {
  return this.state.tasks.map((valor) => {
    return <Task taskText={valor} />
  }) 

}
*/

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
