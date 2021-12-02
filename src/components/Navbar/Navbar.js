import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.item}>Profile</li>
        <li className={classes.item}>Friends</li>
        <li className={classes.item}>Messages</li>
      </ul>
    </nav>
  )
}

export default Navbar