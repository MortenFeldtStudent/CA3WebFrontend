import React from "react";
import { NavLink, } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <ul className="header">
        <li style={styling}>
          <NavLink style={styling} exact to="/">
            Home
        </NavLink>
        </li>
        <li>
          <NavLink style={styling} to="/persons">Persons</NavLink>
        </li>
        <li>
          <NavLink style={styling} to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink style={styling} to="/ships">Ships</NavLink>
        </li>
      </ul>
    </Navbar>
  );
};

var styling = {
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: 15,
}


export default Navigation;
