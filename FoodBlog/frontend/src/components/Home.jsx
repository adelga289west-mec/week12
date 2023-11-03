import React, { useState, useEffect } from 'react';
import axios from 'axios'

import ImageSection from './ImageSection';
import LatestNews from './LatestNews.jsx';
import '../Styles/Home.css';
import '../Styles/Root.css';


function Home({ user }) {

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/blogs/u/${user.username}`)
        .then((res) => {
          /* const reversedData = res.data.data.userBlogs.reverse();
          setUserForm(res.data.data.userBlogs);
          console.log(res.data.data.userBlogs.description) */
          console.log(res.data.data)
          // console.log(`/u/${user} : ` + res.data.data.userBlogs)
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:5000/blogs/")
        .then((res) => {
          // const reversedData = res.data.data.userBlogs.reverse();
          // setUserForm(res.data.data.userBlogs);
          console.log("/ : " + res.data.data.userBlogs)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return(
    <>
      <ImageSection />
      <LatestNews user={user} />
    </>
  );
}

export default Home;


