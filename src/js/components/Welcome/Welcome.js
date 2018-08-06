import React, { Component } from 'react'
import './Welcome.css'
class Welcome extends Component {
  
  render() {
    let welcomeParagraph = "I am in my 5th year of studies at the University of Manitoba in the Computer" +
     "Science Honours and Co-op program. This will be my last year before graduating in the Spring of 2019."

    return (
      <div className="ui grid container centered welcomeContainer">
          <div className="content welcomePaddingTop">
            <h1 id="welcomeTitle"> Welcome </h1>
            <div id="welcomeParagraph" className="sub header">{welcomeParagraph}.</div>
          </div>
      </div>
    );
  }
}

export default Welcome;