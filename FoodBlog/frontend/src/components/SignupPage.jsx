import { useState, useEffect } from 'react';
import '../Styles/LoginPage.css';
import axios from 'axios';

function SignupPage() {
    const [userForm, setUserForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
    });

    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            /* .post("http://localhost:5000/users/signup", userForm) */
            .post("http://localhost:5000/users/signup", userForm)
            .then((res) => {
                console.log(res.data);
                setUserForm({
                    email: "",
                    username: "",
                    password: "",
                    confirmpassword: "",
                });
            });
    };

    useEffect(() => {}, []);

    return (
        <form onSubmit={onSubmit} className="form-body" >
            <p className="form-title">Signup Form</p>
            <div className="login-signup-main">
                <div className="login-signup-body">
                    {/* <button id="login"  className="login-signup-outer">Log-in</button>
                    <button id="signup"   className="login-signup-inner">Sign-up</button>   */}
                </div>
                {/* <div className="form-animation-block" /> */}
            </div>
            <input type="email" placeholder="Email Address" id="email" name="email" className="form-box"  value={userForm.email} onChange={inputsHandler}></input>
            <input type="text" placeholder="Username" id="username" name="username" className="form-box"  value={userForm.username} onChange={inputsHandler} ></input>
            <input type="password" placeholder="Password" id="password" name="password" className="form-box"  value={userForm.password} onChange={inputsHandler} ></input>  
            <input type="password" placeholder="Confirm Password" id="confirmpassword" name="confirmpassword" className="form-box"  value={userForm.confirmpassword} onChange={inputsHandler} ></input>        
            <div className="form-forgot-password-main">
                <a href="#" className="form-forgot-password">
                    <p>Forgot Password?</p>
                </a>
            </div>
           
            <button type="submit" className="form-login-button">
                <p>Sign-up</p>     
            </button>
        
        </form>
    );
}

export default SignupPage;