import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { connect } from "react-redux"
import { updateActiveTechSkillTab } from "../../actions/index"
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
                    Dropdown1Title
                </Accordion.Title>
                <Accordion.Content active={this.props.activeTechSkillTab.index === 0}>
                <p>
                    Dropdown1Content
                </p>
                </Accordion.Content>

                <Accordion.Title active={this.props.activeTechSkillTab.index === 1} index={1} onClick={() => this.handleItemClick(1)}>
                <Icon name='dropdown' />
                    Dropdown2Title
                </Accordion.Title>
                <Accordion.Content active={this.props.activeTechSkillTab.index === 1}>
                <p>
                    Dropdown2Content
                </p>
                </Accordion.Content>

                <Accordion.Title active={this.props.activeTechSkillTab.index === 2} index={2} onClick={() => this.handleItemClick(2)}>
                <Icon name='dropdown' />
                    Dropdown3Title
                </Accordion.Title>
                <Accordion.Content active={this.props.activeTechSkillTab.index === 2}>
                <p>
                    Dropdown3Content
                </p>
                </Accordion.Content>
            </Accordion>
        </div>
    );
  }
}

const TechnicalSkills = connect(mapStateToProps, mapDispatchToProps)(TechnicalSkillsNoState);
export default TechnicalSkills;