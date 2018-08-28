import React, { Component } from 'react'
import { connect } from "react-redux";
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateLanguageInfo } from "../../actions/index"

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

  render() {
    let languageData = this.props.languageInfo.info.data;
    let programmingLanguages = [];

    if(languageData != null){
      languageData.forEach(function(item) {
        let programmingLanguage = null;
        
        programmingLanguage = <div className="col-md-6" key={`${item.technicalSkillName}`}>
          <span className="progress-label">{item.technicalSkillName}</span>
          <div className="progress">
              <div id="{item.technicalSkillName}"
                  aria-valuenow="{item.technicalSkillProficiency}" aria-valuemin="0" aria-valuemax="100">
              </div>
          </div>
        </div>

        programmingLanguages.push(programmingLanguage);
      });
    }
    
    return (
      <div className="row">
          {programmingLanguages}
      </div>
    );
  }
}

const ProgrammingLanguages = connect(mapStateToProps, mapDispatchToProps)(ProgrammingLanguagesNoState);
export default ProgrammingLanguages;