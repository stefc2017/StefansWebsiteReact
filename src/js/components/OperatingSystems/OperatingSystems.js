import React, { Component } from 'react'
import { connect } from "react-redux";
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateOSInfo } from "../../actions/index";
import { Grid, Progress } from 'semantic-ui-react'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { osInfo: state.osInfo };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateOSInfo: osInfo => dispatch(updateOSInfo(osInfo))
  };
};

class OperatingSystemsNoState extends Component {
  
  componentDidMount() {
    var technicalSkillsService = new TechnicalSkillsService();
    technicalSkillsService.getTechnicalSkillsByOperatingSystem().then((result) => {
      this.props.updateOSInfo({'info': result});
    });
  }

  createGrid() {
    let grid = []
    let osData = this.props.osInfo.info.data;
    let currentIndex = 0;
    let numOfRows = 0;
    let dataLength = 0;

    if(osData != null){
      dataLength = osData.length;
      numOfRows = Math.ceil(dataLength / 2);

      // Outer loop to create rows
      for (let i = 0; i < numOfRows; i++) {
        let columns = []
        //Inner loop to create columns
        for (let j = 0; j < 2; j++) {
          if(currentIndex >= dataLength){
            break;
          }
          columns.push(<Grid.Column width={8} key={osData[currentIndex].technicalSkillId}>
            <span className="progress-label">{osData[currentIndex].technicalSkillName}</span>
            <Progress percent={osData.technicalSkillProficiency} color='green' size='small'/>
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

const OperatingSystems = connect(mapStateToProps, mapDispatchToProps)(OperatingSystemsNoState);
export default OperatingSystems;