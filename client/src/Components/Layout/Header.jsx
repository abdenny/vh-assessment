import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='/'>Weather</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/saved'>Saved Weather Events</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
