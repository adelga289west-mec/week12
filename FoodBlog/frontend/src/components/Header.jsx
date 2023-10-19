import { useState } from 'react';
import '../Styles/Header.css';
import '../Styles/Root.css';
import logo from '../Images/World Kitchen Wonders-logos_black.png';
/* import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'; */

function Header() {

  return (
    <div className="header">
        <div className="header-head">
            <div className="header-search-credits">
                {/* <img src="" alt="search logo" /> */}
                <p>Search</p>
                {/* <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" /> */}
            </div>
            <nav className="header-login-signin">
                <a href="">Log In</a>
                <a href="">Sign In</a>
            </nav>
        </div>
        <div className="header-title">
            <p>World Kitchen Wonders</p>
            <img src={logo} alt="logo" />
        </div>
        <nav className="header-subtopics">
            <a href="">Food Talk</a>
            <a href="">Recommendations</a>
            <a href="">Recipes</a>
        </nav>
    </div>
  )
}

export default Header;
