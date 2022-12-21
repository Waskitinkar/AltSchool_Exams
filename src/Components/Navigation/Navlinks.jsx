import { NavLink } from "react-router-dom";

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
        
        <CustomNavLink to="/">Home</CustomNavLink>|{' '}
        <CustomNavLink to="/UseCounter">Use Counter</CustomNavLink>|{' '}
        <CustomNavLink to="/Voters">Testing Error404</CustomNavLink>|{' '}
        <CustomNavLink to="/UseReducer">Use Reducer</CustomNavLink>|{' '}
        <CustomNavLink to="/ErrorBoundary">Error Boundary</CustomNavLink>|{' '}
      </nav>
    );
  }
  export default Layout;