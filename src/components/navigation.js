import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Navigation
 **/

const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect expand="sm" className="color-nav" variant="dark">
      <Navbar.Brand as={Link} to="/" exact>Brazil Boutique</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/tops">
            Tops
          </Nav.Link>
          <Nav.Link as={Link} to="/pants">
            Pants
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/logIn">
            Log In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
