import React from 'react';

const Footer = () => (
  <footer className="text-white mt-6 border-t-2 border-red-500/30 bg-gradient-to-r from-red-800 via-black to-red-800 px-10 py-2">
    
    <div className='bg-yellow-700 w-full flex items-start justify-between pt-10'>
      <p className='text-xl font-bold text-white pt-5'>Download App</p>
      <div className='h-17 w-35'><img src='/photos/footer/google.avif'></img></div>
      <div className='h-17 w-35'><img src='/photos/footer/appstore.avif'></img></div>
     
      <div className='bg-green-950 h-17 w-100'>

      </div>

    </div>
    <div className='bg-red-500 w-full h-40'></div>
    
    {/* <div className="max-w-6xl mx-auto px-4 text-center text-sm">
      <p>&copy; 2026 MovieTicket. All shows reserved. Made with ❤️ in Indore.</p>
    </div> */}
  
  </footer>
);

export default Footer;
