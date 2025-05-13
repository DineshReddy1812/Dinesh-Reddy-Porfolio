import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-20 bg-orange-100 flex items-center px-6" style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}>
        <div className="w-24" style={{ marginLeft: '3rem' }}>
          <a href="Home">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <h2 className="text-2xl font-bold text-black-600 tracking-wide">DineshReddy</h2>
        <div className="flex justify-evenly space-x-10 ml-22">
      <Link to="/" className="group relative text-gray-700 hover:text-orange-600 font-medium">
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
          </Link>
       <Link to="/about" className="group relative text-gray-700 hover:text-orange-600 font-medium">
            About Me
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link to="/project" className="group relative text-gray-700 hover:text-orange-600 font-medium">
            Project
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
          </Link>
       <Link to="/casestudies" className="group relative text-gray-700 hover:text-orange-600 font-medium">
            Casestudies
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        <Link to="/experience" className="group relative text-gray-700 hover:text-orange-600 font-medium">
            Experience
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
          </Link>

          <Link to="/contact" className="group relative text-gray-700 hover:text-orange-600 font-medium">
            Contact me
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-500 group-hover:w-full"></span>
          </Link>
       
      </div>
      <div>
      <button className="relative overflow-hidden bg-black text-white font-semibold py-2 px-4 rounded-lg ml-29 group">
          <span className="absolute inset-0 bg-orange-600 w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
          <span className="relative z-10">Download CV</span>
      </button>
      </div>
      </div>

    
      <hr className="border-t-2 border-gray-900" />
    </div>
  )
}

export default Navbar
