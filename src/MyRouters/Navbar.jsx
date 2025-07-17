import React from 'react'
import home from './home'
import { BrowserRouter,Routes,Route, Link, } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <ul>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/">Main</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/search">Search</Link></li>
      
    </ul>
    
    </>
  )
}

export default Navbar