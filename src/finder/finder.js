import React, { Component } from 'react';
import './finder.css';

class Finder extends Component {
  constructor(props) {
    super(props);
    //this.state = { username: '' };
  }

  render() {

    return (
        <div> {this.props.ph}
      esto es finder y {/* tengo q buscar las tareas */}
      <input
        type='text'
        placeholder={this.props.ph}
        onChange={this.props.mb}
      />


      {/* &copy; Copyright {this.props.company} */}
        </div>
    );
  }
}

export default Finder;