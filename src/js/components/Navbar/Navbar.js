import React, { Component } from 'react'
import NavbarItems from '../NavbarItems/NavbarItems'


export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return <NavbarItems/>
  }
}