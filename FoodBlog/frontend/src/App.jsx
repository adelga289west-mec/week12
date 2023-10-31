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
        <Route path='/' element={<Home />} />
        <Route path='/create-blog' element={<CreateBlg />} />
        <Route path='/view-blogs' element={<BlogPage />} />
        <Route path='/view-indblog' element={<IndBlogPage />} />
        <Route path='/login' element={<LoginPage setUser={setUser} />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <Link to={"/create-blog"}>Create Blog</Link>
      <Link to={"/view-blogs"}>View Blogs</Link>
      <Link to={"/view-indblog"}>View User Blog</Link>
      <Footer />
    </div>
  );
};

export default App;