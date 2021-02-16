import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return (
        todo to hamburger menu
        http://negomi.github.io/react-burger-menu/
        <div className="navigation">
            <Navbar bg='dark' variant='dark'>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Dashboard</Nav.Link>
                    <Nav.Link href="#features">Map</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;
