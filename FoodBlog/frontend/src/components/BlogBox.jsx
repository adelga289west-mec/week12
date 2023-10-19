import { useState, useEffect } from 'react';
import '../Styles/BlogBox.css';
import mini_img from '../Images/mini_img.jpg';
import MiniTag from './MiniTag';
import axios from 'axios';

function BlogBox() {
    const [userForm, setUserForm] = useState([]);


  
    useEffect(() => {
      axios
      .get("http://localhost:5000/blogs/")
      .then((res) => {
          setUserForm(res.data.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }, []);
  

  return (
    <>


    
     {userForm.map((user) => {
        return (
          <div className="blog-box-main">
      <div className="blog-box">
          <div className="blog-box-info">
              <p className="blog-box-username">*username*</p>
              <p className="blog-box-title">{user.title}</p>
              <p className="blog-box-description">{user.description}</p>
              <div className="blog-box-date-tags">
                  <p className="blog-box-date">Oct 18</p>
                  <MiniTag />
              </div>
          </div>
          <div className="blog-box-image-body">
              <img src={mini_img} alt="post image" className="blog-box-image" />
          </div>
      </div>
    </div>
         
        );
    })}
 
 </>


  
  )
}

export default BlogBox;