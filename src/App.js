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
            .map((valor, indice) => {
              return <Task taskText={valor} taskid={indice} eliminarid={this.eliminar} />
            });
  }

eliminar = (indice) => {
   /* funcion elimina un dato del array , tienes dato + */
  console.log("Estoy eliminando la tarea " + indice);
  // this.setState(this.state.tasks.splice(indice,0))
  let newTasks = [...this.state.tasks];
  console.log(newTasks.splice(indice,1));
  this.setState({tasks: newTasks});
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
