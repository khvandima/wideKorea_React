import React from 'react'
import { Link } from 'react-router-dom'

import style from "./header.module.css"

const Header = () => {
  return (
    <div className="container">
      <div className={style.header}>
            <div className={style.header_top}>
                <div className={style.logo}>
                  <Link to="/" className="logo-link"><img src="../../../image/globus.png" alt="LOGO" /></Link>
                </div>
            </div>
            <nav className={style.nav}>
                <Link to="/" className={style.nav__link}>Home</Link>
                <Link to="/about" className={style.nav__link}>About</Link>
                <Link to="/contacts" className={style.nav__link}>Contacts</Link>
                <Link to="/login" className={style.nav__link}>Login</Link>
                <div className={style.nav__link}>My page</div>
            </nav>

        </div>
      <div/>
    </div>
  )
}

export default Header
