import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import LoginModal from "../LoginModal";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const user = this.props.user;    
    return (
      <div>
        <Navbar className="p-3 fixed-top" color="light" light expand="md">
          <NavbarBrand href="/">
            <h1>myTrip</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {user && (
              <NavItem className="mr-3 mt-2">
                <h5>Hello, {this.props.user}</h5>
              </NavItem>
            )}
              <NavItem>
                <NavLink href="#">
                  <h5 onClick={e => this.props.handleQuickTrip(e, this.props)}>Surprise me</h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <LoginModal
                  handleUserLoginChange={this.props.handleUserLoginChange}
                />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
