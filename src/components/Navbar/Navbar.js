import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/profile" >Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/friends">Friends</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar