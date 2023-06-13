import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Main() {
    const nav=useNavigate()

    const loginpage=()=>{
        localStorage.removeItem('username')
        nav('/login')
    }
    const username=localStorage.getItem('username')
    console.log(username);
  return (
    <div>
          <Navbar bg="light" variant="light">
        <Container>
          
          <Navbar.Brand href="#home" className='navcontent'>{username}</Navbar.Brand>
          <Button variant="primary" onClick={loginpage}>Logout</Button>
        </Container>
      </Navbar>
      <h1 style={{marginLeft:'48rem',marginTop:'2rem'}}>Main page</h1>
    </div>
  )
}

export default Main