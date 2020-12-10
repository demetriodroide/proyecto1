import React, { Component } from 'react';
import './task.css';


class Task extends Component {
  constructor(props) {
    super(props);
    //this.state = { username: '' };
  }
  render() {
    return (
      
        <div>
          esto es task y
          <h2> {this.props.taskText} </h2>
        </div>
      
    );
  }
}

export default Task;