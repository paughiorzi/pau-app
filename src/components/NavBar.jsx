import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="App.css" />

let NavBar=({arrayDeLink})=> {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" className="NavB">
          <Container>
            <Navbar.Brand href="/" className="NavB"> / P G / </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {arrayDeLink.map((link) => {
                  return (
                    <Nav.Link key={link.id} href={link.enlace}>
                      {link.nombre}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default NavBar;
