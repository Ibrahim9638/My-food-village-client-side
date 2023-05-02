import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-lg p-2 bg-white rounded"  >
      <Container>
        <Navbar.Brand href="#home"><span className="fw-bold fs-4">The</span><img className="w-25" src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none px-4 fw-bold text-black ">
              Home
            </Link>
            <Link to="/blog" className="text-decoration-none px-2 fw-bold text-black">
              Blog
            </Link>
          </Nav>
          <Nav>
            <Link to="/login">
              <Button variant="dark">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
