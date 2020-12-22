import React, { Component } from 'react';
import './task.css';


class Task extends Component {
  constructor(props) {
    super(props);
    this.state = 
    { checking: '' }
  }

  changeCheckbox = () => {
    // Si no esta realizada...
    if(this.state.checking === '') {
      // La marco
      this.setState({ checking : 'checked' })
    }
    else {
      // La desmarco
      this.setState({ checking : '' })
    }
  }
  
eliminar = () => {

  this.props.eliminarid(this.props.taskid)
}

  render() {
    return (
      
        <div>
          esto es task y voy a : 
          <h2> {this.props.taskText} {this.props.taskid} </h2>

           <input type="checkbox" checked={this.state.checking} onChange={this.changeCheckbox} />
            <button type="button" onClick={this.eliminar} >Eliminar</button>

           {/*<input type="checkbox" checked={this.setState({checking: checked.value})} />*/}
        </div>
      
    );
  }
}

export default Task;