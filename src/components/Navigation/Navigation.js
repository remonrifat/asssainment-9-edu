import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">OnlineEdu.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-item" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-item" to="/contact">
              contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
