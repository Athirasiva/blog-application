import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
         <Navbar className='bg-dark' >
        <Container>
          <Link to={'/'}  style={{ textDecoration: "none", color: "white" }} className='me-3'>Home</Link>
          <Nav className="me-auto">
            <Link to='/'  style={{ textDecoration: "none", color: "white" }}  className='me-3'>Blogs</Link>
            <Link to={'/addblog'}  style={{ textDecoration: "none", color: "white" }}  className='me-3'>Add Blog</Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header