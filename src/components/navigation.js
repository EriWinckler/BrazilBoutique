import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
* @author
* @function Navigation
**/

const Navigation = (props) => {
  return(
    <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Tops</Nav.Link>
          <Nav.Link href="#pricing">Leggings</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
  </Navbar>
   )

 }

export default Navigation