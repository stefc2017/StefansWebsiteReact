import React, { Component } from 'react'
import { connect } from "react-redux"
import { Menu, Segment } from 'semantic-ui-react'
import { updateActiveItem } from "../../actions/index"
import Body from "../Body/Body"
import MyFooter from "../MyFooter/MyFooter"

//To map a state to prop (to display)
const mapStateToProps = state => {
  return { activeItem: state.activeItem };
};

//To update the state
const mapDispatchToProps = dispatch => {
  return {
    updateActiveItem: activeItem => dispatch(updateActiveItem(activeItem))
  };
};

class NavbarItemsNoState extends Component {
  
  handleItemClick(item){
    this.props.updateActiveItem({'item': item})
  }

  render() {
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name='home' active={this.props.activeItem.item === 'home'} onClick={() => this.handleItemClick('home')}/>
          </Menu>
        </Segment>
  
        <Body></Body>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

const NavbarItems = connect(mapStateToProps, mapDispatchToProps)(NavbarItemsNoState);
export default NavbarItems;