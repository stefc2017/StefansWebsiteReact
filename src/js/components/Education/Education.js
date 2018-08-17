import React, { Component } from 'react'
import { connect } from "react-redux";
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component'
import EducationService from '../../services/EducationService'
import WorkIcon from '../../icons/WorkIcon'
import SchoolIcon from '../../icons/SchoolIcon'
import { updateEducationInfo } from "../../actions/index";
import 'react-vertical-timeline-component/style.min.css'
import './Education.css'

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { educationInfo: state.educationInfo };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateEducationInfo: educationInfo => dispatch(updateEducationInfo(educationInfo))
  };
};

class EducationNoState extends Component {
  
  componentDidMount() {
    var educationService = new EducationService();
    educationService.getEducationInfo().then((result) => {
      this.props.updateEducationInfo({'info': result});
    });
  }

  render() {
    let educationData = this.props.educationInfo.info.data;
    let educationComponents = [];

    if(educationData != null){
      educationData.forEach(function(item) {
        let verticalTimelineElement = null;
        
        if(item.educationType === "School"){
          verticalTimelineElement = <VerticalTimelineElement key={`${item.educationId}`}
          className="vertical-timeline-element--education"
          date={`${item.educationDate}`}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">{item.educationTitle}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.educationLocation}</h4>
          <p>
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
          <h3 className="vertical-timeline-element-title">{item.educationTitle}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.educationLocation}</h4>
          <p>
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

const Education = connect(mapStateToProps, mapDispatchToProps)(EducationNoState);
export default Education;