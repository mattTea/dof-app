import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = () => (
  <div className="fixed"> 
    <header className="container vertical-align">
      <NavLink to="/" exact={true}>
        <img src={require('../../public/images/home.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </NavLink>
      <NavLink to="/training">
        <img src={require('../../public/images/training.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </NavLink>
      <NavLink to="/contact">
        <img src={require('../../public/images/contact.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </NavLink>
      <NavLink to="/booking">
        <img src={require('../../public/images/book.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </NavLink>
    </header>
  </div>
);

export default NavHeader;