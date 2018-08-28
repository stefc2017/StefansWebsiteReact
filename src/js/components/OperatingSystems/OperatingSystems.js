import React, { Component } from 'react'
import { connect } from "react-redux";
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateOSInfo } from "../../actions/index";

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

  render() {
    let osData = this.props.osInfo.info.data;
    let operatingSystems = [];

    if(osData != null){
      osData.forEach(function(item) {
        let os = null;
        
        os = <div className="col-md-6" key={`${item.technicalSkillName}`}>
          <span className="progress-label">{item.technicalSkillName}</span>
          <div className="progress">
              <div id="{item.technicalSkillName}"
                  aria-valuenow="{item.technicalSkillProficiency}" aria-valuemin="0" aria-valuemax="100">
              </div>
          </div>
        </div>

        operatingSystems.push(os);
      });
    }
    
    return (
      <div className="row">
          {operatingSystems}
      </div>
    );
  }
}

const OperatingSystems = connect(mapStateToProps, mapDispatchToProps)(OperatingSystemsNoState);
export default OperatingSystems;