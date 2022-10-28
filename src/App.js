// import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import AppRouter from './routes/home_route';



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


function Layout() {
  return (
    <nav>
      <h1>THE NIGERIAN ELECTORAL REGISTRATION</h1>
      <CustomNavLink to="/">Home</CustomNavLink>|{' '}
      <CustomNavLink to="/about">About</CustomNavLink>|{' '}
      <CustomNavLink to="/Electoral">Electoral Party</CustomNavLink>|{' '}
      <CustomNavLink to="/Electoral/new">New Voters</CustomNavLink>|{' '}
      <CustomNavLink to="/users">Users</CustomNavLink>|{' '}
      <CustomNavLink to="/Voters">Casted Votes</CustomNavLink>|{' '}
      
    </nav>
  );
}

function App() {
  return (
    <div className="App">
    <Layout /> 
      <h1>VOTING IS YOUR RIGHT!!!</h1><br></br>
      <h4>YOU can't afford to loose it</h4>
      <AppRouter/>
      {/* <Logo/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
