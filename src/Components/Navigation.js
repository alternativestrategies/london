import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
      <React.Fragment>
          <Navbar expand="md" className='pb-4'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <h1 className="logo">
                <NavLink to="/">London</NavLink>
            </h1>    
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                <NavLink exact to="/todo">Chill Out</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/eat">Get A Bite</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink to="/contact">Learn More</NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
         
        
        </React.Fragment>
    );
}

export default Navigation;