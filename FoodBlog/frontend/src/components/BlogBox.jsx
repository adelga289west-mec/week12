import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
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
                setUserForm(res.data.data.reverse());
            })
            .catch((error) => {
                console.log(error);
            });
            
    }, []);
    
  
    return (
        <>
            {userForm.map((user) => {
                return (
                    <Link to={'/view-indblog/'}>
                    <div className="blog-box-main" >
                        <div className="blog-box">
                            <div className="blog-box-info">
                                <p className="blog-box-username">{user.author}</p>
                                <p className="blog-box-title">{user.title}</p>
                                <p className="blog-box-description">{user.description}</p>
{/*                                 <Link  className="mini-blog-read-more" to={"/view-indblog"}>Read More</Link>
 */}                                <div className="blog-box-date-tags">
                                    <p className="blog-box-date">{user.createdAt}</p>
                                    <MiniTag />
                                </div>
                            </div>
                            <div className="blog-box-image-body">
                                <img src={user.imageUrl} alt="post image" className="blog-box-image" />
                            </div>
                        </div>
                    </div>
                    </Link>
                );
            })}
        </>  
    );
}

export default BlogBox;