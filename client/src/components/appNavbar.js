import React, {Component, Fragment} from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
Nav,
NavItem,
Container,
NavLink
}from 'reactstrap' ;

import { Link } from 'react-router-dom'

import LogIn from './../views/Login';
import SignUp from './../views/Form';
// import Logout from './auth/Logout';
// import {connect} from 'react-redux';
import logo from '../assets/images/MYtineraryLogo.png';
import Cities from '../views/Cities';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render(){
return (
<div>
    <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
            <img width='50%' src={logo} alt='mytinerary-logo'/>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <Fragment>
                        <NavItem>
                            <NavLink href='/login'>Log In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/users'>Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/cities'>Cities</NavLink>
                        </NavItem>
                    </Fragment>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
</div>

);

    }}


export default AppNavbar;