import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { Link, Outlet } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  let [form, setform]=useState({
    email:"",
    pass: ""
  })

  let handleChange=(e)=>{
    setform({...form, [e.target.name]: e.target.value})
  }

  let handleSubmit=(e)=>{
    
      e.preventDefault()
      

      let valid=true

      if(form.email.trim() == "") {
      alert("Please enter email")
      valid = false
      return
      }

      if(form.pass.trim() == "") {
      alert("Please enter password")
      valid = false
      return
      }

      let users = JSON.parse(localStorage.getItem('users') || '[]')
      let exituser = users.find((e)=>{
        return e.email == form.email
      })
      if(!exituser){
        alert("email is not registered")
        navigate('/register')
        valid=false
        return
      }

      if(form.pass!=exituser.pass){
        alert("Invalid password")
        setform({...form, pass: ""})
        valid=false
        return
      }

      if(valid){
        alert("Login Successfully😊")
        navigate('/home')
      }

  }

  return (
    <>
      <div className="login-container">
      
      <div className="login-card">
        
        <div className="login-header">
          <h1 className="logo">MovieTicket</h1>
          <p className="subtitle">Sign in to your account</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
         
          <div className="input-group">
            <label className="input-label">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="input-field" placeholder="Enter your email"/>
          </div>
          
          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" name="pass" value={form.pass} onChange={handleChange} className="input-field" placeholder="Enter your password"/>
          </div>
          
          <button type="submit" className="login-btn">Sign In</button>
          
          <p className="register-link">
            New user?<Link to='/register'>Register here</Link>
          </p>
       
        </form>
     
      </div>
    
    </div>
    </>
  )
}

export default Login
