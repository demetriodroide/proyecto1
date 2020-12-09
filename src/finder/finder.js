import React, { Component } from 'react';
import './finder.css';

class finder extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };
    
  }

  render() {
    return (
        <div>
      esto es finder y 
      <input
        type='text'
        onChange={this.props.miBuscador}
      />


      {/* &copy; Copyright {this.props.company} */}
        </div>
    );
  }
}

export default finder;