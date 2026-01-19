import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className='flex justify-between px-4 py-4 bg-amber-300 text-'>
        <h1>LOGO</h1>
        <input type='text' placeholder='Search for movies....'></input>
        <nav>
            <ul className='flex gap-10 '>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/show_all'>Movies</Link></li>
                <li><Link to='/booking'>Book Show</Link></li>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/logout'>logout</Link></li>
            </ul>
        </nav>
      </header>
      <Outlet></Outlet>
      <footer>
        <h1>This is footer</h1>
      </footer>
    </>
  )
}

export default Layout
