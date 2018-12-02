import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const NavHeader = ({ startLogout }) => (
  <div className="fixed"> 
    <header className="container vertical-align">
      <NavLink to="/training">
        <img src={require('../../public/images/training.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </NavLink>
      <NavLink to="/booking">
        <img src={require('../../public/images/book.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </NavLink>
      <NavLink to="/contact">
        <img src={require('../../public/images/info.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </NavLink>
      <button className="signout-button" onClick={startLogout}>Sign out
        <img src={require('../../public/images/signout.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
      </button>
    </header>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(NavHeader);