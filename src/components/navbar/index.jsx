import React from 'react'
import {Link}  from "react-router-dom"
import "./index.css"
const Navbar = () => {
  return (
    <div className='nav'>
<Link to="/" className='navbar'>Home</Link>
<Link to="/blogs"  className='navbar'>Blogs</Link>
<Link to="/projects"  className='navbar'>Projects</Link>
<Link to="/feedback"  className='navbar'>Feedback form</Link>
    </div>
  )
}

export default Navbar