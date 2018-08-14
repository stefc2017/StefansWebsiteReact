import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Education from '../Education/Education';

class Body extends Component {
  
  render() {
    return (
        <div>
            <Welcome></Welcome>
            <Education></Education>
        </div>
    );
  }
}

export default Body;