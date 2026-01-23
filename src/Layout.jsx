import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    {/* ----------------------------------------navbar----------------------------------- */}
      <header className="bg-gradient-to-r from-red-800 via-black to-red-800 text-white shadow-2xl sticky top-0 z-50 py-4 px-4">
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white bg-clip-text text-transparent order-1">Movie Ticket</h1>
       
        <div className="w-full lg:w-80 xl:w-96 order-3 lg:order-2 flex-shrink-0 mx-2 lg:mx-0">
          <input type='text' placeholder='Search for movies....'
          className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-black/50 backdrop-blur-sm border border-red-500/50 rounded-full text-white placeholder-gray-200 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 text-sm sm:text-base">
          </input>
        </div>
        
        <nav className="w-full lg:w-auto order-2 lg:order-3">
            
            <ul className="flex flex-col lg:flex-row gap-3 lg:gap-4 xl:gap-6 items-center justify-center lg:justify-end p-3 lg:p-0 bg-black/30 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-0 rounded-lg lg:rounded-none shadow-lg lg:shadow-none border lg:border-0 border-red-500/30">
                
                <li><Link to='/home'
                  className="px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:bg-red-600/50 hover:text-red-300 rounded-lg transition-all duration-200 block w-full lg:w-auto text-center lg:hover:scale-80">
                  Home
                  </Link>
                </li>
                
                <li><Link to='/about'
                  className="px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:bg-red-600/50 hover:text-red-300 rounded-lg transition-all duration-200 block w-full lg:w-auto text-center lg:hover:scale-80">
                  About
                  </Link>
                </li>
                <li><Link to='/show_all'
                  className="px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:bg-red-600/50 hover:text-red-300 rounded-lg transition-all duration-200 block w-full lg:w-auto text-center lg:hover:scale-80">
                  Movies
                  </Link>
                </li>
                
                <li><Link to='/booking'
                  className="px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:bg-red-600/50 hover:text-red-300 rounded-lg transition-all duration-200 block w-full lg:w-auto text-center lg:hover:scale-80">
                  Show Booking
                  </Link>
                </li>
                
                <li><Link to='/login'
                  className="px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:bg-red-600/50 hover:text-red-300 rounded-lg transition-all duration-200 block w-full lg:w-auto text-center lg:hover:scale-80">
                  login
                  </Link>
                </li>
                
                <li><Link to='/register'
                  className="px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:bg-red-600/50 hover:text-red-300 rounded-lg transition-all duration-200 block w-full lg:w-auto text-center lg:hover:scale-80">
                  Register
                  </Link>
                </li>
                
                <li><Link to='/logout'
                  className="px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:bg-red-600/50 hover:text-red-300 rounded-lg transition-all duration-200 block w-full lg:w-auto text-center lg:hover:scale-80">
                  logout
                  </Link>
                </li>
            
            </ul>
       
          </nav>
        </div>  
     
      </header>
      
      {/*------------------------------------------content render here----------------------------------- */}
      <Outlet></Outlet>
      
      {/* ------------------------------------------------footer--------------------------------------------/ */}
      <footer>
        <h1>This is footer</h1>
      </footer>
    </>
  )
}

export default Layout
