import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { connect } from "react-redux"
import { updateActiveTechSkillTab } from "../../actions/index"
import ProgrammingLanguages from '../ProgrammingLanguages/ProgrammingLanguages'
import TechAndFrameworks from '../TechAndFrameworks/TechAndFrameworks'
import OperatingSystems from '../OperatingSystems/OperatingSystems'
import Software from '../Software/Software'
import "./TechnicalSkills.css"

//To map a state to prop (to display)
const mapStateToProps = state => {
    return { activeTechSkillTab: state.activeTechSkillTab };
  };
  
  //To update the state
  const mapDispatchToProps = dispatch => {
    return {
        updateActiveTechSkillTab: activeTechSkillTab => dispatch(updateActiveTechSkillTab(activeTechSkillTab))
    };
  };

class TechnicalSkillsNoState extends Component {

    handleItemClick = (tabIndex) => {
        this.props.updateActiveTechSkillTab({'index': tabIndex})
    }
  
  render() {
    return (
        <div className="ui grid container techSkillsContainer">
            <Accordion fluid styled>
                <Accordion.Title active={this.props.activeTechSkillTab.index === 0} index={0} onClick={() => this.handleItemClick(0)}>
                <Icon name='dropdown' />
                    Programming Languages
                </Accordion.Title>
                <Accordion.Content className="accordionContent" active={this.props.activeTechSkillTab.index === 0}>
                    <ProgrammingLanguages></ProgrammingLanguages>
                </Accordion.Content>

                <Accordion.Title active={this.props.activeTechSkillTab.index === 1} index={1} onClick={() => this.handleItemClick(1)}>
                <Icon name='dropdown' />
                    Technologies and Frameworks
                </Accordion.Title>
                <Accordion.Content className="accordionContent" active={this.props.activeTechSkillTab.index === 1}>
                    <TechAndFrameworks> </TechAndFrameworks>
                </Accordion.Content>

                <Accordion.Title active={this.props.activeTechSkillTab.index === 2} index={2} onClick={() => this.handleItemClick(2)}>
                <Icon name='dropdown' />
                    Operating Systems
                </Accordion.Title>
                <Accordion.Content className="accordionContent" active={this.props.activeTechSkillTab.index === 2}>
                    <OperatingSystems></OperatingSystems>
                </Accordion.Content>

                <Accordion.Title active={this.props.activeTechSkillTab.index === 3} index={3} onClick={() => this.handleItemClick(3)}>
                <Icon name='dropdown' />
                    Software
                </Accordion.Title>
                <Accordion.Content className="accordionContent" active={this.props.activeTechSkillTab.index === 3}>
                    <Software></Software>
                </Accordion.Content>
            </Accordion>
        </div>
    );
  }
}

const TechnicalSkills = connect(mapStateToProps, mapDispatchToProps)(TechnicalSkillsNoState);
export default TechnicalSkills;