import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <form onSubmit={handleSubmit}>
     
      Email : <input type=' text' placeholder='enter your name' name='email' value={form.email} onChange={handleChange}></input><br></br>
      Password : <input type=' text' placeholder='enter your name' name='pass' value={form.pass} onChange={handleChange}></input><br></br>
      <button type='submit'>login</button>
      
      </form>
    </>
  )
}

export default Login
