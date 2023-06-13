import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nav=useNavigate()

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const [User, setUser] = useState([])
    console.log(User.data);

    const signup=()=>{
        nav('/')
    }

    const api='http://localhost:5001/signin'

    const login=async(event)=>{
        event.preventDefault()
        const usercheck=await axios.post(api,{Email,Password})
        console.log(usercheck);

        // setUser(usercheck)
        if(usercheck.data.Token){
            localStorage.setItem('username',usercheck.data.username)
         alert(usercheck.data.msg)
        nav('/main')
    }
    else{
        return alert(usercheck.data.msg)
    }
    }

  return (
    <div>
            <Navbar bg="light" variant="light">
        <Container>
          
          <Navbar.Brand href="#home" className='navcontent'>Don't have a accound?</Navbar.Brand>
          <Button variant="primary" onClick={signup}>Signup</Button>
        </Container>
      </Navbar>
      <div className='input'>
        <h3 style={{paddingLeft:'7rem'}}>Welcome back!</h3>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
  
      <Button  className="submit-button" variant="primary" onClick={login}>Login</Button>
     
    </Form>
      </div>
    </div>
  )
}

export default Login