import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../Styles/BlogAccount.css';
import '../Styles/Root.css';

export default function BlogAccount() {
  // useEffect(() => {}, []);

  return(
    <>
      <div className="blog-account-main">
        <div className="blog-account-profile-background">
          <div className="blog-account-profile-img">
            {/* <img src={} />  */}
          </div>
        </div>
        <div className="blog-account-username">
          <p>Username</p>
        </div>
        <div className="blog-account-bio">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eos doloremque cumque harum quis. Corrupti illo doloremque nemo aspernatur a! Accusantium officiis exercitationem assumenda molestiae tempora delectus doloribus voluptatem error! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eos doloremque cumque harum quis. Corrupti illo doloremque nemo aspernatur a! Accusantium officiis exercitationem assumenda molestiae tempora delectus doloribus voluptatem error!
          </p>
        </div>
        <div className="blog-account-posts-title">
          <p>Blog Posts</p>
        </div>
        <div className="blog-account-posts">
          <div className="blog-account-post">
              
          </div>
        </div>
      </div>
    </>
  );
}