import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  
  let navigate = useNavigate()

  let [form, setform]=useState({
    name:"",
    email:"",
    pass:"",
    cpass:"",
  })
  let handleChange=(e)=>{
    setform({...form, [e.target.name]: e.target.value})
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    
    let valid=true
     
    //---------------------------name validation-------------------------------------------
    if(form.name.trim()==""){
      alert("please enter name")
      valid=false
      return
    }
    // this is a regex pattern /^[a-zA-Z\s]+$/ 
    // ^  = start of string
    // [a-zA-Z] = letters only (a-z OR A-Z)  
    // \s = spaces allowed
    // +  = one or more characters
    // $  = end of string
    //test - Returns true if pattern matches, false if not
    if(!/^[a-zA-Z\s]+$/.test(form.name.trim())){
      alert('please enter valid name!')
      setform({...form,name: ""})
      valid=false
      return
    }

    //------------------------------email validation---------------------------------------------
    if(form.email.trim()==""){
      alert('please enter email')
      valid=false
      return
    }
    // ^  = Start of string
    // [^\s@]+ = 1+ chars (NOT space OR @)
    // @ = Literal @
    // [^\s@]+ = 1+ chars (NOT space OR @)  
    // \. = Literal dot (escaped)
    // [^\s@]+ = 1+ chars (NOT space OR @)  
    // $ = End of string
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())){
      alert('Please enter valid email')
      setform({...form,email: ""})
      valid=false
      return
    }

    //------------------------------------password validation----------------------
    if(form.pass.trim()==""){
      alert('Please enter password')
      valid=false
      return
    }
    if(form.pass.trim().length<6){
      alert("Please enter password contain at least 6 characters")
      setform({...form, pass: ""})
      valid=false
      return
    }
    if(!/[^a-zA-Z0-9]/.test(form.pass.trim())){
      alert('Please enter strong password')
      setform({...form, pass: ""})
      valid=false
      return
    }

    //-----------------------------confirm password validation-----------------------
    if(form.cpass.trim()==""){
      alert("Please enter confirm password")
      valid=false
      return
    }
    if(form.cpass!=form.pass){
      alert("Password do not match")
      setform({...form, cpass: ""})
      valid=false
      return
    }

   //-------------------------------if form is valid-------------------------------
   if(valid){
    //---local storage---
   
    //localStorage.getItem('key')
    let users =JSON.parse(localStorage.getItem('users')) || []
    let exituser = users.find((e)=>{
      return e.email == form.email
    })

    if(exituser){
      alert('already registered!')
      navigate('/login')
      return
    }
    
    users.push(form)
    
    //localStorage.setItem('key')
    localStorage.setItem("users", JSON.stringify(users))
    
    alert("Registration Successfully😊")
    navigate('/login')
  }
}

  
  return (
    <>
      <form onSubmit={handleSubmit}>
      
      Name: <input type='text' placeholder='enter your name' name='name' value={form.name} onChange={handleChange}></input><br></br>
      Email : <input type='text' placeholder='enter your email ' name='email' value={form.email} onChange={handleChange}></input><br></br>
      Password : <input type='text' placeholder='enter strong password' name='pass' value={form.pass} onChange={handleChange}></input><br></br>
      Confirm Password : <input type='text' placeholder='enter Confirm Password' name='cpass' value={form.cpass} onChange={handleChange}></input><br></br>
      <button type='submit'>register</button>
      
      </form>
    </>
  )
}

export default Register
