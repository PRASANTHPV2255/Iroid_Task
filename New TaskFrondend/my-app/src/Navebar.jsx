import React from 'react'
import { Button, Container, Nav, Navbar }from 'react-bootstrap'
import './Navebar.css'

function Navebar() {
  return (
    <div>
         <Navbar bg="light" variant="light">
        <Container>
          
          <Navbar.Brand href="#home" className='navcontent'>Don't have a accound?</Navbar.Brand>
          <Button variant="primary">Signup</Button>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default Navebar