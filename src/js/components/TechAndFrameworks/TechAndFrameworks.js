import React, { Component } from 'react'
import { connect } from "react-redux";
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateTechNFrameworkInfo } from "../../actions/index";

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

  render() {
    let techNFrameworkData = this.props.techNFrameworkInfo.info.data;
    let techNFrameworks = [];

    if(techNFrameworkData != null){
        techNFrameworkData.forEach(function(item) {
        let techFramework = null;
        
        techFramework = <div className="col-md-6" key={`${item.technicalSkillName}`}>
          <span className="progress-label">{item.technicalSkillName}</span>
          <div className="progress">
              <div id="{item.technicalSkillName}"
                  aria-valuenow="{item.technicalSkillProficiency}" aria-valuemin="0" aria-valuemax="100">
              </div>
          </div>
        </div>

        techNFrameworks.push(techFramework);
      });
    }
    
    return (
      <div className="row">
          {techNFrameworks}
      </div>
    );
  }
}

const TechAndFrameworks = connect(mapStateToProps, mapDispatchToProps)(TechAndFrameworksNoState);
export default TechAndFrameworks;