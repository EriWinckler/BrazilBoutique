import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "./firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Navbar collapseOnSelect expand="sm" className="color-nav" variant="dark">
      <Navbar.Brand as={Link} to="/" exact>
        Brazil Boutique
      </Navbar.Brand>
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
        <Nav className="mx-auto">
          <div>{user ? "Hello " + user?.email : null}</div>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/checkout">
            {cart.length >= 1 ? (
              <FontAwesomeIcon icon={faCartPlus} />
            ) : (
              <FontAwesomeIcon icon={faShoppingCart} />
            )}
          </Nav.Link>
          <Nav.Link as={Link} to={!user && "/logIn"}>
            <div onClick={login}>{user ? "Log Out" : "Log In"}</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
