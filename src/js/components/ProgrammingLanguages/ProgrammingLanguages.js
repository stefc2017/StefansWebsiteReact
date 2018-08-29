import React, { Component } from 'react'
import { connect } from "react-redux"
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateLanguageInfo } from "../../actions/index"
import { Grid, Progress } from 'semantic-ui-react'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { languageInfo: state.languageInfo };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateLanguageInfo: languageInfo => dispatch(updateLanguageInfo(languageInfo))
  };
};

class ProgrammingLanguagesNoState extends Component {
  
  componentDidMount() {
    var technicalSkillsService = new TechnicalSkillsService();
    technicalSkillsService.getTechnicalSkillsByLanguage().then((result) => {
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
            <Progress percent={languageData.technicalSkillProficiency} color='green' size='small'/>
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

const ProgrammingLanguages = connect(mapStateToProps, mapDispatchToProps)(ProgrammingLanguagesNoState);
export default ProgrammingLanguages;