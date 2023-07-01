'use client';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/output.css';

function NavBar() {
    return(
        <Navbar className="justify-content-end">
            <Navbar.Brand href="#home" className="nav-logo">Smell My Buds</Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default NavBar;