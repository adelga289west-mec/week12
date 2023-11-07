import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../Styles/IndBlogPage.css';
import axios from 'axios';
import '../Styles/Root.css'
import sampleImg from '../Images/steak.png';

function IndBlogPage(/* {user} */) {
  let params= useParams();
  const [blog, setBlog] = useState([]);
  // const blogId = params.blogId;
  
  useEffect(() => {
    axios
      .get('http://localhost:5000/blogs/Indblog/' + params.blogId)
      .then((result) => {
        setBlog(result.data.data);
        console.log(result.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
      <div className="indblog-grid">
          <img className="indblog-image" src={blog.imageUrl} />
          {/* <Link to="/profile/:"> */}<p className="indblog-title">{blog.title}</p>
          <p className="indblog-credit">Written By {blog.author}</p>
          <p className="indblog-description">{blog.description}</p>
      </div>
  );
}

export default IndBlogPage;