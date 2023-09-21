import style from "./header.module.css"

import React from 'react'

const Header = () => {
  return (
    <div className="container">
      <div className={style.header}>
            <div className={style.header_top}>
                <div className={style.logo}>
                  <a href="/" className="logo-link"><img src="../../../image/globus.png" alt="LOGO" /></a>
                </div>
            </div>
            <nav className={style.nav}>
                <a href="/" className={style.nav__link}>Home</a>
                <a href="/about" className={style.nav__link}>About</a>
                <a href="/contacts" className={style.nav__link}>Contacts</a>
                <a href="/login" className={style.nav__link}>Login</a>
            </nav>

        </div>
      <div/>
    </div>
  )
}

export default Header
