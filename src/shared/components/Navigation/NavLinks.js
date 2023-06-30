import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faRightFromBracket, faServer, faNewspaper, faEnvelope, faSignature } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  const redirectHandler = () => {
    auth.logout();
  };

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/home" exact>
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <span>Home</span>
          </NavLink>
        </li>
      )}

      <li>
        <NavLink to="/explore">
          <span>
          <FontAwesomeIcon icon={faServer} />
          </span>
          <span>Explore</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="/apply">
          <span>
          <FontAwesomeIcon icon={faNewspaper} />
          </span>
          <span>Apply</span>
        </NavLink>
      </li>

      {auth.isLoggedIn && (
        <li>
          <NavLink to="/notify">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span>Notify</span>
          </NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li>
          <NavLink id="nav-auth" to="/auth">
            <span>
              <FontAwesomeIcon icon={faSignature} />
            </span>
            <span>{"Login" || "Signup"}</span>
          </NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li>
          <NavLink id="nav-auth" to="/logout" onClick={redirectHandler}>
          <span><FontAwesomeIcon icon={faRightFromBracket} /></span>
            <span>Logout</span>
          </NavLink>
        </li>
      )}
      
    </ul>
  );
};

export default NavLinks;
