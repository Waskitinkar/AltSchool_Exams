import React from 'react'
import Navlinks from './Navlinks'
import classes from './Navbar.module.css';

function Navigation() {
  return (
    
    <nav className={classes.Navigation}>
      <div className='Heading'><h1 style={{color:'red'}}>
         NIGERIAN ELECTION REGISTRATION COUNCIL</h1></div>
    <Navlinks/>
    </nav>
    )
}

export default Navigation