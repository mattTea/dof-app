import React from 'react';
import { NavLink } from 'react-router-dom';

// var {Link, IndexLink} = require('react-router');


const NavHeader = () => (
  <header className="container">
    <NavLink to="/" activeClassName="is-active" exact={true}>Music</NavLink>
    <NavLink to="/plays" activeClassName="is-active">Theatre</NavLink>
  </header>
);

// var OldNavHeader = (props) => {

//   return (
//     <div className="top-bar vertical-align">
//       <div className="top-bar-center show-for-small-only">
//         <ul className="menu">
//           <li>
//             <IndexLink to="/">
//               <img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "3.5em", maxHeight: "3.5em"}}></img>
//             </IndexLink>
//           </li>
//           <li>
//             <IndexLink to="/" activeClassName="active-link" style={{fontSize: 13, color: "white"}}>Music</IndexLink>
//           </li>
//           <li>
//             <Link to="/plays" activeClassName="active-link" style={{fontSize: 13, color: "white"}}>Theatre</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="top-bar-left show-for-medium">
//         <ul className="menu">
//           <li><img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "5em", maxHeight: "5em"}}></img></li>
//           <li className="menu-text">Gigs in Tiny Venues</li>
//           <li>
//             <IndexLink to="/" activeClassName="active-link">Music</IndexLink>
//           </li>
//           <li>
//             <Link to="/plays" activeClassName="active-link">Theatre</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="top-bar-right show-for-medium">
//         <ul className="menu">
//           <li className="menu-text">
//             Created by <a href="https://github.com/mattTea" target="_blank">mattTea</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

export default NavHeader;
