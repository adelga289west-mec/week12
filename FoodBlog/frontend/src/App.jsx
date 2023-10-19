import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import CreateBlg from './components/CreateBlg';
import Header from './Components/Header';
import Home from './Components/Home';
import BlogPage from './components/BlogPage';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-blog' element={<CreateBlg />} />
        <Route path='/view-blogs' element={<BlogPage />} />
      </Routes>
      <Link to={"/create-blog"}>Create Blog</Link>
      <Link to={"/view-blogs"}>View Blogs</Link>


      <Footer />

      {/* <Header />

      <Home />
      <Link to={"/create-blog"}>Create Blog</Link>

      <Routes>


        <Route path='/create-blog' element={<CreateBlg />} />


      </Routes>
      <Footer /> */}
    </div>



  );
};


export default App;




