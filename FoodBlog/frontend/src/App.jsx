import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import CreateBlg from './components/CreateBlg';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx';
import BlogPage from './components/BlogPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  // Specifc User Account
  const [user, setUser] = useState();
  function resetUser() {
    const user_Account = JSON.parse(window.localStorage.getItem("user_account"));
    console.log(user_Account);
    setUser(user_Account);
  }

  useEffect(() => {
    resetUser()

    // const getUserData = async () => {
    //   await axios
    //     .get(`http://localhost:5000/users/`, {})
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
    // }

    // getUserData()
  }, [])


  return (
    <div /* onLoad={resetUser()} */>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-blog' element={<CreateBlg />} />
        <Route path='/view-blogs' element={<BlogPage />} />
        <Route path='/login' element={<LoginPage setUser={setUser} />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <Link to={"/create-blog"}>Create Blog</Link>
      <Link to={"/view-blogs"}>View Blogs</Link>
      <Footer />
    </div>
  );
};

export default App;