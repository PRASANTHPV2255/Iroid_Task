import React, { useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Navebar.css'
import axios from 'axios'


function Signup() {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // console.log(Name);
    const nav=useNavigate()
    
    const loginp=()=>{
        nav('/login')
    }

    const signup=async(event)=>{
        
        event.preventDefault()
        const api='http://localhost:5001/Signup'

        const usersignup=await axios.post(api,{Name,Email,Password})
        if(usersignup.data.Token){
            localStorage.setItem('username',usersignup.data.username)
       await alert('User Signup success')
        nav('/main')
        } else {
            await alert(usersignup.data.msg)
        }
    }
  return (
    <div>
          <Navbar bg="light" variant="light">
        <Container>
          
          <Navbar.Brand href="#home" className='navcontent'>already have a accound?</Navbar.Brand>
          <Button variant="primary" onClick={loginp}>Login</Button>
        </Container>
      </Navbar>
      <div className='input'>
        <h3 className='form-head'>Let's go!</h3>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button className="submit-button" variant="primary" onClick={signup}>Sign up</Button>
    </Form>
      </div>
    </div>
  )
}

export default Signup