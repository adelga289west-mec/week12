import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../Styles/MiniBlog.css';
import '../Styles/Root.css';
import img1 from '../Images/mini_img.jpg';
import axios from 'axios';

function MiniBlog({user}) {
  const [userForm, setUserForm] = useState([]);



  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/blogs/u/${user.username}`)
        .then((res) => {
          // const reversedData = res.data.data.userBlogs/* .reverse() */;
          // setUserForm(res.data.data.userBlogs);
          console.log(res.data.data.userBlogs);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:5000/blogs/")
        .then((res) => {
          // const reversedData = res.data.data.userBlogs/* .reverse() */;
          // setUserForm(res.data.data.userBlogs);
          console.log(res.data.data.userBlogs);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);



  return (
    <>

      {userForm.map((user) => {
        return (
          <div className="mini-blog-body">
            <img className="mini-blog-image" src={user.imageUrl} alt="mini blog img" />
            <div className="mini-blog-more">
              <p className="mini-blog-date">*Date*</p>
              <p className="mini-blog-username">*Username*</p>
              <p className="mini-blog-title">{user.title}</p>
              <p className="mini-blog-description">{user.description}</p>
               <Link className="mini-blog-read-more" to={"/view-indblog"}>Read More</Link>
            </div>
          </div>







        );
      })}
      {/*   */}
    </>
  )
}

export default MiniBlog;