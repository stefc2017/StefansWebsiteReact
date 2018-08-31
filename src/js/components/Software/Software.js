import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateSoftwareInfo } from "../../actions/index";
import { Progress } from 'reactstrap'
import { Grid } from 'semantic-ui-react'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { softwareInfo: state.softwareInfo, technicalSkillsService: state.technicalSkillsService };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateSoftwareInfo: softwareInfo => dispatch(updateSoftwareInfo(softwareInfo))
  };
};

class SoftwareNoState extends Component {
  
  componentDidMount() {
    this.props.technicalSkillsService.getTechnicalSkillsBySoftware().then((result) => {
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
            <Progress striped color={this.props.technicalSkillsService.setProgressBarColor(softwareData[currentIndex].technicalSkillProficiency)} value={softwareData[currentIndex].technicalSkillProficiency} />
          </Grid.Column>);
          currentIndex++;
        }
        //Create the parent and add the children
        grid.push(<Grid.Row id="row" key={i}>{columns}</Grid.Row>)
      }
    }
    
    return grid
  }

  render() {    
    return (
      <Grid id="grid">
        {this.createGrid()}
      </Grid>
    );
  }
}

const Software = connect(mapStateToProps, mapDispatchToProps)(SoftwareNoState);
export default Software;