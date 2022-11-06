import React from 'react'
import { NavLink } from 'react-router-dom';


const CustomNavLink = ({ to, ...props }) => {
    let activeStyle = {
      textDecoration: 'underline',
      color: 'red',
      transition: 'all 4s',
    };
  
    return (
      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : { textDecoration: 'none' }

        }
        to={to}
        end
        {...props}
      />
    );
  };


  export default function Navlinks () {
  return (
    
    <ul className='Navlinks'>
      
        <li><CustomNavLink to="/">Home</CustomNavLink></li>
        <li><CustomNavLink to="/about">About</CustomNavLink></li>
        <li><CustomNavLink to="/Electoral">Electoral Party</CustomNavLink></li>
        <li><CustomNavLink to="/Electoral/new">New Voters</CustomNavLink></li>
        <li><CustomNavLink to="/users">Users</CustomNavLink></li>
        <li><CustomNavLink to="/Voters">Casted Votes</CustomNavLink></li>
    </ul>
    
 

  )
}
