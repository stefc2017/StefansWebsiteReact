import React, { Component } from 'react'
import { connect } from "react-redux";
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateSoftwareInfo } from "../../actions/index";

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

  render() {
    let softwareData = this.props.softwareInfo.info.data;
    console.log(softwareData);
    let softwares = [];

    if(softwareData != null){
        softwareData.forEach(function(item) {
        let software = null;
        
        software = <div className="col-md-6" key={`${item.technicalSkillName}`}>
          <span className="progress-label">{item.technicalSkillName}</span>
          <div className="progress">
              <div id="{item.technicalSkillName}"
                  aria-valuenow="{item.technicalSkillProficiency}" aria-valuemin="0" aria-valuemax="100">
              </div>
          </div>
        </div>

        softwares.push(software);
      });
    }
    
    return (
      <div>
          {softwares}
      </div>
    );
  }
}

const Software = connect(mapStateToProps, mapDispatchToProps)(SoftwareNoState);
export default Software;