import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

/**
* @author
* @function Navigation
**/

const Navigation = (props) => {
  return(
    <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="/">Brazil Boutique</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
        <Nav.Link as={Link} to="/tops">Tops</Nav.Link>
        <Nav.Link as={Link} to="/pants">Pants</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
  </Navbar>
   )

 }

export default Navigation