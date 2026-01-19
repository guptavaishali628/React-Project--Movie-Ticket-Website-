import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Show_all from './pages/Show_all'
import Booking from './pages/Booking'
import Login from './auth/Login'
import Register from './auth/Register'
import Logout from './auth/Logout'
import Layout from './Layout'

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='show_all' element={<Show_all/>} />
        <Route path='booking' element={<Booking/>} />
      </Route>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/logout' element={<Logout/>} />
    </Routes>
  )
}

export default App
