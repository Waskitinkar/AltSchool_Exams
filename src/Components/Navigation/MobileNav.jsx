import React , {useState} from 'react'
import Navlinks from './Navlinks'
import classes from './Navbar.module.css';
import { CgMenuRound } from 'react-icons/cg';
// import {CgCloseO } from 'react-icons/cg';
import '../Overview/MobileOverview.css'


function MobileNav() {

  const [Open, setOpen] = useState('true')
  
//  const CloseMenu = () => setOpen(false)
 
//  let activeStyle = {
//   textDecoration: 'underline',
//   color: 'red',
//   transition: 'all 4s',
// };
 return (
    <nav className={classes.MobileNav}>
   <div className='Heading'><h1 style={{color:'green'}}> 
   NIGERIAN ELECTION REGISTRATION COUNCIL</h1></div>

   
    <CgMenuRound className='OpenIcon' color='white' size='40px'
     onClick={()=> setOpen(!Open)}/>
     
     
     
    {Open && <Navlinks/>}
    </nav>
    )
}

export default MobileNav