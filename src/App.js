// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import AppRouter from './routes/home_route';
import React from 'react';
import { CgMenuRound } from 'react-icons/cg';
import {CgCloseO } from 'react-icons/cg';
import Navbar from './Components/Navigation/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar /> 
    
    <div id="AppRouter">
      <AppRouter />
    </div>
      {/* <Logo/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;


// const CustomNavLink = ({ to, ...props }) => {
//   let activeStyle = {
//     textDecoration: 'underline',
//     color: 'red',
//     transition: 'all 4s',
//   };

//   return (
//     <NavLink
//       style={({ isActive }) =>
//         isActive ? activeStyle : { textDecoration: 'none' }
//       }
//       to={to}
//       end
//       {...props}
//     />
//   );
// };


// function Layout() {
//   const {status,setStaus} = useState('open')
//   return (
//     <nav>
//       <h1 className='Logo_Name'>THE NIGERIAN ELECTORAL REGISTRATION</h1>
//       <CustomNavLink to="/">Home</CustomNavLink>|{' '}
//       <CustomNavLink to="/about">About</CustomNavLink>|{' '}
//       <CustomNavLink to="/Electoral">Electoral Party</CustomNavLink>|{' '}
//       <CustomNavLink to="/Electoral/new">New Voters</CustomNavLink>|{' '}
//       <CustomNavLink to="/users">Users</CustomNavLink>|{' '}
//       <CustomNavLink to="/Voters">Casted Votes</CustomNavLink>|{' '}
//     <div className='BurgerMenuCon'>
//    <CgMenuRound className='OpenIcon'/>
//    <CgCloseO className='CloseIcon'/>
//       <button className=''><i></i></button>
//       <button className='mobile-menu-icon'><i className='fas fa-times'></i><i className='fas fa-bars'></i></button>
//       <button className='mobile-menu-icon'><i className='fas fa-times'></i><i className='fas fa-bars'></i></button>
//       </div>
//     </nav>
//   );
// }
