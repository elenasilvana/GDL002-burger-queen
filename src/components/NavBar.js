import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="light">
        <Navbar.Brand as={Link} to={ROUTES.LANDING}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to={ROUTES.ORDER}>Orden</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.KITCHEN}>Cocina</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;

