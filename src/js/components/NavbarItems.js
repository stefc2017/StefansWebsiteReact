import React from "react";
import { connect } from "react-redux";
import { Menu, Segment } from 'semantic-ui-react'

const mapStateToProps = state => {
  return { activeItem: state.activeItem };
};
const ConnectedNavbarItems = ({ activeItem }) => (
    <div>
    <Menu pointing secondary>
      <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
    </Menu>

    <Segment>
      <p> hello </p>
    </Segment>
  </div>
);
const NavbarItems = connect(mapStateToProps)(ConnectedNavbarItems);
export default NavbarItems;