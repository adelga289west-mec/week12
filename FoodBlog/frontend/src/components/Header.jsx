import { useState } from 'react';
import '../Styles/Header.css';
import '../Styles/Root.css';
import logo from '../Images/World Kitchen Wonders-logos_black.png';
/* import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'; */

function Header() {

  return (

    <>
    <header className="header">
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <img src="instagram_icon.png" alt="Instagram Icon" />
        <img src="facebook_icon.svg" alt="FaceBook Icon" />
        <img src="twitter_icon.png" alt="Twitter Logo" />
      </div>

      <div className="Logging">
      <a className="Log" href="/login">Log In</a>
      <a className="Log" href="/signup">Sign Up</a>
      </div>

    </header>


        <div className="header-title">
            <p>World Kitchen Wonders</p>
            <img src={logo} alt="logo" />
        </div>
        <nav className="header-subtopics">
            <a href="">Food Talk</a>
            <a href="">Recommendations</a>
            <a href="">Recipes</a>
        </nav>

        </>
    
    
  )
}

export default Header;
