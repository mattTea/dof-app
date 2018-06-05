import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = () => (
  <header className="container vertical-align">
    <NavLink to="/" exact={true}>Home
      <img src={require('../../public/images/favicon.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
    </NavLink>
    <NavLink to="/training">Training</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/about">About</NavLink>
  </header>
);

export default NavHeader;