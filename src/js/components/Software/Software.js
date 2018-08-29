import React, { Component } from 'react'
import { connect } from "react-redux";
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateSoftwareInfo } from "../../actions/index";
import { Grid, Progress } from 'semantic-ui-react'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { softwareInfo: state.softwareInfo };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateSoftwareInfo: softwareInfo => dispatch(updateSoftwareInfo(softwareInfo))
  };
};

class SoftwareNoState extends Component {
  
  componentDidMount() {
    var technicalSkillsService = new TechnicalSkillsService();
    technicalSkillsService.getTechnicalSkillsBySoftware().then((result) => {
      this.props.updateSoftwareInfo({'info': result});
    });
  }

  createGrid() {
    let grid = []
    let softwareData = this.props.softwareInfo.info.data;
    let currentIndex = 0;
    let numOfRows = 0;
    let dataLength = 0;

    if(softwareData != null){
      dataLength = softwareData.length;
      numOfRows = Math.ceil(softwareData.length / 2);
      
      // Outer loop to create rows
      for (let i = 0; i < numOfRows; i++) {
        let columns = []
        //Inner loop to create columns
        for (let j = 0; j < 2; j++) {
          if(currentIndex >= dataLength){
            break;
          }
          columns.push(<Grid.Column width={8} key={softwareData[currentIndex].technicalSkillId}>
            <span className="progress-label">{softwareData[currentIndex].technicalSkillName}</span>
            <Progress percent={softwareData.technicalSkillProficiency} color='green' size='small'/>
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

const Software = connect(mapStateToProps, mapDispatchToProps)(SoftwareNoState);
export default Software;