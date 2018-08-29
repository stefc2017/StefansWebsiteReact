import React, { Component } from 'react'
import { connect } from "react-redux";
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateTechNFrameworkInfo } from "../../actions/index";
import { Grid, Progress } from 'semantic-ui-react'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { techNFrameworkInfo: state.techNFrameworkInfo };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateTechNFrameworkInfo: techNFrameworkInfo => dispatch(updateTechNFrameworkInfo(techNFrameworkInfo))
  };
};

class TechAndFrameworksNoState extends Component {
  
  componentDidMount() {
    var technicalSkillsService = new TechnicalSkillsService();
    technicalSkillsService.getTechnicalSkillsByFramework().then((result) => {
      this.props.updateTechNFrameworkInfo({'info': result});
    });
  }

  createGrid() {
    let grid = []
    let techNFrameworkData = this.props.techNFrameworkInfo.info.data;
    let currentIndex = 0;
    let numOfRows = 0;
    let dataLength = 0;

    if(techNFrameworkData != null){
      dataLength = techNFrameworkData.length;
      numOfRows = Math.ceil(techNFrameworkData.length / 2);
      
      // Outer loop to create rows
      for (let i = 0; i < numOfRows; i++) {
        let columns = []
        //Inner loop to create columns
        for (let j = 0; j < 2; j++) {
          if(currentIndex >= dataLength){
            break;
          }
          columns.push(<Grid.Column width={8} key={techNFrameworkData[currentIndex].technicalSkillId}>
            <span className="progress-label">{techNFrameworkData[currentIndex].technicalSkillName}</span>
            <Progress percent={techNFrameworkData.technicalSkillProficiency} color='green' size='small'/>
          </Grid.Column>);
          currentIndex++;
        }
        //Create the parent and add the children
        grid.push(<Grid.Row key={i}>{columns}</Grid.Row>)
      }
    }
    
    return grid
  }

  render() {    
    return (
      <Grid>
        {this.createGrid()}
      </Grid>
    );
  }
}

const TechAndFrameworks = connect(mapStateToProps, mapDispatchToProps)(TechAndFrameworksNoState);
export default TechAndFrameworks;