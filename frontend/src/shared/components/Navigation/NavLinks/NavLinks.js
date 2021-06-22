import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/Auth-Context'
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {
        isLoggedIn &&
        <li>
          <NavLink to="/u1/places">
            MY PLACE
        </NavLink>
        </li>
      }
      {
        isLoggedIn &&
        <li>
          <NavLink to="/places/new">
            ADD PLACE
          </NavLink>
        </li>

      }
      {
        !isLoggedIn &&
        <li>
          <NavLink to="/auth">
            AUTHENTICATE
          </NavLink>
        </li>
      }

    </ul>
  )
}

export default NavLinks;
