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

function Header() {
  const [user, setUser] = useState()

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

  return (  
    <>
    <Routes>
    <Route path='/login' element={<LoginPage setUser={setUser} />} />
        <Route path='/signup' element={<SignupPage />} />


    </Routes>
      <header className="header">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <img src="instagram_icon.png" alt="Instagram Icon" />
          <img src="facebook_icon.svg" alt="FaceBook Icon" />
          <img src="twitter_icon.png" alt="Twitter Logo" />
        </div>

        <div className="Logging">
          {/* <%= userAccount.username %> */}
          <p>{user ? user.username : ""}</p>
          
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign Up</Link>



     {/*      <a className="Log" href="/login">Log In</a>
          <a className="Log" href="/signup">Sign Up</a> */}
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
