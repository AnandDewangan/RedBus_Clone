import React, { useEffect, useRef } from 'react'
import { Container, Form } from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("token")){
        navigate("/")
    }
},[])

function login(){
    if(!username.current.value||!password.current.value){
        toast.error('Both the fields are required');
    }
    else{
        localStorage.setItem("token","userToken");
        navigate("/home")
    }
}

  return (
    <Container className='w-50 d-flex justify-content-center align-items-center flex-column' style={{height:'100vh'}}>
      <Toaster />
        <h1 style={{color:'red'}}>Login</h1>
        <Form.Control
          ref={username}
          placeholder="Username"
          type="text"
          aria-describedby="basic-addon1"
          className='my-3'
        />
        <Form.Control
          ref={password}
          placeholder="Password"
          type="password"
          aria-describedby="basic-addon1"
          className='my-3'
        />
        <button className='btn btn-danger w-100' onClick={login}>Log In</button>
    </Container>
  )
}
