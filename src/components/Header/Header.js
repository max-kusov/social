import React from "react"
import classes from './Header.module.css'
import logo from '../../assets/img/social.png'


const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <i class="fas fa-sign-out-alt"></i>
    </header>
  )
}

export default Header