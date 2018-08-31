import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateOSInfo } from "../../actions/index";
import { Progress } from 'reactstrap'
import { Grid } from 'semantic-ui-react'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { osInfo: state.osInfo, technicalSkillsService: state.technicalSkillsService };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateOSInfo: osInfo => dispatch(updateOSInfo(osInfo))
  };
};

class OperatingSystemsNoState extends Component {
  
  componentDidMount() {
    this.props.technicalSkillsService.getTechnicalSkillsByOperatingSystem().then((result) => {
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
            <Progress striped color={this.props.technicalSkillsService.setProgressBarColor(osData[currentIndex].technicalSkillProficiency)} value={osData[currentIndex].technicalSkillProficiency} />
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

const OperatingSystems = connect(mapStateToProps, mapDispatchToProps)(OperatingSystemsNoState);
export default OperatingSystems;