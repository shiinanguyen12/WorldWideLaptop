import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'

function Header() {
  return (
    <nav className="header">
      <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Gw2k_2004_logo.svg/1200px-Gw2k_2004_logo.svg.png" alt="" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* 1st link*/}
        <Link to="/Login" className="header__link">
          <div className="header__option">
            <PeopleIcon />
            <span className="header__optionOne">Login</span>
          </div>
        </Link>
        {/* 2nd link*/}
        <Link to="/Register" className="header__link">
          <div className="header__option">
            <PeopleIcon />
            <span className="header__optionOne">Registered</span>
          </div>
        </Link>
        {/*3rd link*/}
        <Link to="/Cart" className="header__link">
          <div className="header__option">
            <ShoppingCartIcon />
            <span className="header-optionOne">Your Cart</span>
          </div>
        </Link>
      </div>
    </nav>

  )
}


export default Header