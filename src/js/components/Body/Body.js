import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import Education from '../Education/Education';
import TechnicalSkills from '../TechnicalSkills/TechnicalSkills';

class Body extends Component {
  
  render() {
    return (
        <div>
            <Welcome></Welcome>
            <Education></Education>
            <TechnicalSkills></TechnicalSkills>
        </div>
    );
  }
}

export default Body;