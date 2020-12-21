import React, { Component } from 'react';
import './task.css';


class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { checking: '' };
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

  render() {
    return (
      
        <div>
          esto es task y voy a : 
          <h2> {this.props.taskText}
           </h2>

           <input type="checkbox" checked={this.state.checking} onChange={this.changeCheckbox} />


           {/*<input type="checkbox" checked={this.setState({checking: checked.value})} />*/}
        </div>
      
    );
  }
}

export default Task;