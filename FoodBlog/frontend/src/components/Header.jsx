import { useState , useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../Styles/Header.css';
import '../Styles/Root.css';
import logo from '../Images/World Kitchen Wonders-logos_black.png';
import axios from 'axios';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
/* import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'; */

function Header({user}) {

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const getUserData = async () => {
  //   await axios
  //     .get(`http://localhost:5000/users/`)
  //     // .findOne({
  //     //   email: req.body.email,
  //     // });
  //     .then((result) => {
  //       console.log(result)
  //       setUser(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }

  //   getUserData()
  // }, []);

  const accountMenu = () => {
    // *Must use functions in order to return html format code
    return(
      user.username
    );
  }

  return (  
    <>
      <header className="header">
        <div className="search-container">
          <img src="instagram_icon.png" alt="Instagram Icon" />
          <img src="facebook_logo.png" alt="FaceBook Icon" />
          <img src="twitter_icon.png" alt="Twitter Logo" />
        </div>
        <div className="Logging">
          <p>{user ? accountMenu() : <Link to={"/login"}>Login</Link>}</p>
        </div>
      </header>
      
      <div className="header-title">
        <p className="header-p">
          <Link className="no-decor main-color" to={"/"}>World Kitchen Wonders</Link>
        </p>
        <Link className="no-decor main-color" to={"/"}>
          <img className="header-img" src={logo} alt="logo" />
        </Link>
      </div>

      <nav className="header-subtopics">
        <Link to={"/view-blogs"}>Food Talk</Link>
        <Link to={"/view-blogs"}>Recommendations</Link>
        <Link to={"/view-blogs"}>Recipes</Link>
      </nav>
    </>
  )
}

export default Header;