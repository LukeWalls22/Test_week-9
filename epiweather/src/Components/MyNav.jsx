import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyNav() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">EpiWeather</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
