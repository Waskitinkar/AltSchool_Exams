import React from 'react'
import MobileNav from './MobileNav'
import Navigation from './Navigation'
import classes from './Navbar.module.css';


export default function Navbar() {
  return (
    <div className={classes.Navbar}>    
    <MobileNav />
    <Navigation/>
    </div>

  )
}
