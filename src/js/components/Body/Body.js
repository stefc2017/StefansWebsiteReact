import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Education from '../Education/Education';
import PersonalProjects from '../PersonalProjects/PersonalProjects';

class Body extends Component {
  
  render() {
    return (
        <div>
            <Welcome></Welcome>
            <Education></Education>
            <PersonalProjects></PersonalProjects>
        </div>
    );
  }
}

export default Body;