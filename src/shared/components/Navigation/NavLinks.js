import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSignature } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';


const NavLinks = props => {

  const auth = useContext(AuthContext)
  const redirectHandler = () => {
    auth.logout()
  }

  return <ul className="nav-links">
    {auth.isLoggedIn && <li>
      <NavLink to="/home" exact> <FontAwesomeIcon icon={faHouse} /> <span>Home</span></NavLink>
    </li>}
    {<li>
      <NavLink to="/explore"><FontAwesomeIcon icon={faInfinity} /> <span>Explore</span></NavLink>
    </li>}
    {<li>
      <NavLink to="/apply"><FontAwesomeIcon icon={faFileLines} /> <span>Apply</span></NavLink>
    </li>}
    {auth.isLoggedIn && <li>
      <NavLink to="/notify"><FontAwesomeIcon icon={faEnvelope} /> <span>Notify</span></NavLink>
    </li>}
    {!auth.isLoggedIn && <li>
      <div className="signup-link">
        <p>To keep all your apply handy, make sure you make account.</p>
        <NavLink id='nav-auth' to="/auth"> <FontAwesomeIcon icon={faSignature} /><span>{ "Login" || "Signup"}</span></NavLink>
      </div>
    </li>}
    {auth.isLoggedIn && <li>
      <Link to="/explore" onClick={redirectHandler}><span>Logout</span></Link>
    </li>}
  </ul>
};

export default NavLinks;