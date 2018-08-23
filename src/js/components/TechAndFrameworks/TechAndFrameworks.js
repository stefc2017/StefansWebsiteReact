import React, { Component } from 'react'
import { connect } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component'
import TechnicalSkillsService from '../../services/TechnicalSkillsService'
import { updateLanguageInfo } from "../../actions/index";
import 'react-vertical-timeline-component/style.min.css'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { languageInfo: state.languageInfo };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateLanguageInfo: languageInfo => dispatch(updateEducationInfo(languageInfo))
  };
};

/* TODO: Need to do the render method */
class TechAndFrameworksNoState extends Component {
  
  componentDidMount() {
    var technicalSkillsService = new TechnicalSkillsService();
    technicalSkillsService.getTechnicalSkillsByLanguage().then((result) => {
      this.props.updateLanguageInfo({'info': result});
    });
  }

  render() {
    let languageData = this.props.languageInfo.info.data;
    let languageComponents = [];

    if(educationData != null){
      educationData.forEach(function(item) {
        let verticalTimelineElement = null;
        
        if(item.educationType === "School"){
          verticalTimelineElement = <VerticalTimelineElement key={`${item.educationId}`}
          className="vertical-timeline-element--education"
          date={`${item.educationDate}`}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}>
          <h5 id="title" className="vertical-timeline-element-title">{item.educationTitle}</h5>
          <h6 id="subtitle" className="vertical-timeline-element-subtitle">{item.educationLocation}</h6>
          <p id="paragraph">
            {item.educationDescription}
          </p>
        </VerticalTimelineElement>
        }
        else if(item.educationType === "Work"){
          verticalTimelineElement = <VerticalTimelineElement key={`${item.educationId}`}
          className="vertical-timeline-element-work"
          date={`${item.educationDate}`}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}>
          <h5 id="title" className="vertical-timeline-element-title">{item.educationTitle}</h5>
          <h6 id="subtitle" className="vertical-timeline-element-subtitle">{item.educationLocation}</h6>
          <p id="paragraph">
           {item.educationDescription}
          </p>
        </VerticalTimelineElement>
        }
        educationComponents.push(verticalTimelineElement);
      });
    }
    
    return (
      <div className="ui grid container educationContainer">
      <VerticalTimeline id="educationSection">
        {educationComponents}
      </VerticalTimeline>
      </div>

    );
  }
}

const TechAndFrameworks = connect(mapStateToProps, mapDispatchToProps)(TechAndFrameworksNoState);
export default TechAndFrameworks;