import React, { Component } from 'react'
import { connect } from "react-redux"
import { updateLanguageInfo } from "../../actions/index"
import { Progress } from 'reactstrap'
import { Grid } from 'semantic-ui-react'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { languageInfo: state.languageInfo, technicalSkillsService: state.technicalSkillsService };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateLanguageInfo: languageInfo => dispatch(updateLanguageInfo(languageInfo))
  };
};

class ProgrammingLanguagesNoState extends Component {
  
  componentDidMount() {
    this.props.technicalSkillsService.getTechnicalSkillsByLanguage().then((result) => {
       this.props.updateLanguageInfo({'info': result});
    });
  }

  createGrid() {
    let grid = []
    let languageData = this.props.languageInfo.info.data;
    let currentIndex = 0;
    let numOfRows = 0;
    let dataLength = 0;

    if(languageData != null){
      dataLength = languageData.length;
      numOfRows = Math.ceil(languageData.length / 2);
      
      // Outer loop to create rows
      for (let i = 0; i < numOfRows; i++) {
        let columns = []
        //Inner loop to create columns
        for (let j = 0; j < 2; j++) {
          if(currentIndex >= dataLength){
            break;
          }
          columns.push(<Grid.Column width={8} key={languageData[currentIndex].technicalSkillId}>
            <span className="progress-label">{languageData[currentIndex].technicalSkillName}</span>
            <Progress striped color={this.props.technicalSkillsService.setProgressBarColor(languageData[currentIndex].technicalSkillProficiency)} value={languageData[currentIndex].technicalSkillProficiency} />
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

const ProgrammingLanguages = connect(mapStateToProps, mapDispatchToProps)(ProgrammingLanguagesNoState);
export default ProgrammingLanguages;