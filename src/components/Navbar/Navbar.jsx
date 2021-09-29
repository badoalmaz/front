import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#4D7186", color: "wheat" }}
        // bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand style={{ color: "wheat" }} href="/">
              inCity
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Nav.Link style={{ color: "wheat" }} href="/">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/places">
                <Nav.Link style={{ color: "wheat" }} href="/places">
                  Places
                </Nav.Link>
              </Link>
              <Link to="/chat">
                <Nav.Link style={{ color: "wheat" }} href="/chat">
                  Chat
                </Nav.Link>
              </Link>
              <Link to="/contact-us">
                <Nav.Link style={{ color: "wheat" }} href="/contact-us">
                  Contact Us
                </Nav.Link>
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Button
              style={{ color: "wheat", borderColor: "wheat" }}
              variant="outline-light"
            >
              Sign out
            </Button>
            <Link to="/auth">
              {/* <Button
                style={{ color: "wheat", borderColor: "wheat" }}
                variant="outline-light"
              >
                Login
              </Button> */}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
