import { useState, useEffect } from 'react';
import '../Styles/MiniBlog.css';
import '../Styles/Root.css';
 import img1 from '../Images/mini_img.jpg';
 import axios from 'axios';
 
function MiniBlog() {
  const [userForm, setUserForm] = useState([]);


  
  useEffect(() => {
    axios
    .get("http://localhost:5000/blogs/")
    .then((res) => {
        setUserForm(res.data.data);
        console.log(res.data.data.description)
    })
    .catch((error) => {
        console.log(error);
    });
}, []);



  return (
    <>

                    {userForm.map((user) => {
                        return (

                          <div className="mini-blog-body">
                          <img className="mini-blog-image" src={img1} alt="mini blog img" />
                          <div className="mini-blog-more">
                              <p className="mini-blog-date">*Date*</p>
                              <p className="mini-blog-username">*Username*</p>
                              <p className="mini-blog-title">{user.title}</p>
                              <p className="mini-blog-description">{user.description}<span className="mini-blog-read-more">...Read More</span></p>
                          </div>
                        </div>




                      

                         
                        );
                    })}
   {/*   */}
    </>
  )
}

export default MiniBlog;