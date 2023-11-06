import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios'
import Footer from './components/Footer';
import CreateBlg from './components/CreateBlg';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx';
import BlogPage from './components/BlogPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import IndBlogPage from './components/IndBlogPage';
import UserProfilePage from './components/BlogAccount';

function App() {
  // Specifc User Account
  const [user, setUser] = useState();

  function resetUser() {
    const user_Account = JSON.parse(window.localStorage.getItem("user_account"));
    setUser(user_Account.data);
  }

  useEffect(() => {
    resetUser();
  }, []);

  return (
    <div>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home /* logout={logout} */ />} /> {/* COMPLETE */}
        {/* <Route path='/' element={ user ? <Home user={user} logout={logout} /> : <Home /> } />  */}
        {/* Redirects User To Login If They Are Not Logged In */}
        <Route path='/create-blog' element={ user ? <CreateBlg user={user} /> : <Link to="/login" /> } /> {/* COMPLETE */}
        <Route path='/view-blogs' element={ user ? <BlogPage user={user} /> : <BlogPage /> } /> {/* ALMOST COMPLETED [date JS (year, month, day display)] */}
        <Route path='/view-indblog' element={ user ? <IndBlogPage user={user} /> : <IndBlogPage /> } />
        {/* <Route path='/view-indprofile' element={ <IndBlogPage /> } /> */}
        <Route path='/view-profile' element={ user ? <UserProfilePage user={user} /> : <UserProfilePage /> } />
        <Route path='/login' element={<LoginPage setUser={setUser} />} /> {/* COMPLETE */}
        <Route path='/signup' element={<SignupPage />} /> {/* COMPLETE */}
      </Routes>

      {/* Links For Testing Purposes */}
      <Link to={"/create-blog"}>Create Blog</Link>
      <Link to={"/view-blogs"}>View Blogs</Link>
      <Link to={"/view-indblog"}>View User Blog</Link>
      <Link to={"/view-profile"}>View User Account</Link>
      <Footer />
    </div>
  );
};

export default App;