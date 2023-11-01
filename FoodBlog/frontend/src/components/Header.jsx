import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../Styles/Header.css';
import '../Styles/Root.css';
import logo from '../Images/World_Kitchen_Wonders_logos_black.png';
/* import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'; */

export default function Header({user}) {
  const[show, setShow]= useState(false);

  function dropDown() {
    return(
      <div className="header-dropdown"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setShow(false);
          }, 2500)
        }}
      >
        <div className="dropdown-column">
          <Link to={"/view-profile"}>Profile</Link>
          <Link to={"/create-blog"}>Create Blog</Link>
          <Link to={"/"}>Log Out</Link>
        </div>
        <div className="dropdown-column">
          <Link to={"/"}>Lorem ipsum dolor</Link>
          <Link to={"/"}>Lorem</Link>
          <Link to={"/"}>Lorem ipsum</Link>
        </div>
        {/* <div className="dropdown-column">
          <Link to={"/"}>Create Blog</Link>
        </div> */}
      </div>
    );
  }

  function accountMenu() {
    return(
      <>
        <p>{user.username}</p>
        <i className="arrow arrow-down"></i>
      </>
    );
  }

  useEffect(() => {}, []);

  return(
    <>
      <header className="header">
        <div className="header-head">
          <div className="header-socials">
            <a href="#">
              <img src="instagram_icon.png" alt="Instagram Icon" />
            </a>
            <a href="#">
              <img src="facebook_logo.png" alt="FaceBook Icon" />
            </a>
            <a href="#">
              <img src="twitter_icon.png" alt="Twitter Logo" />
            </a>
          </div>
          <div className="header-login" 
            onMouseEnter={() => {
              setShow(true);
            }} 
            onMouseLeave={() => {
              setTimeout(() => {
                setShow(false);
              }, 2500)
            }}
          >
            {user ? accountMenu() : <Link to={"/login"}>Login</Link>}
          </div>
        </div>
      </header>
      <div className="sub-header">
        {/* if show is true, display dropDown() */}
        { show && dropDown() }
        <div className="header-title">
          <p className="header-p">
            <Link className="no-decor main-color" to={"/"}>World Kitchen Wonders</Link>
          </p>
          <Link className="no-decor main-color" to={"/"}>
            <img className="header-img" src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="header-subtopics">
          <Link to={"/view-blogs"}>Discover More</Link>
        </nav>
      </div>
    </>
  );
}