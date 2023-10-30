import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../Styles/LoginPage.css';
import axios from 'axios';

function LoginPage({setUser}) {

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

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios
            .get(`http://localhost:5000/users/validate/${userForm.email}`)
            .then(res => {
                console.log(res.data.data);
                // *if no account email (unique) matched
                if(res.data.data.email === undefined) {
                    const input = document.getElementById('email');
                    input.setCustomValidity('That email does not match with any account.');
                    return;
                }
                if (res.data.data.username != userForm.username || 
                    res.data.data.password != userForm.password || 
                    res.data.data.confirmpassword != userForm.confirmpassword) {
                    const input = document.getElementById('email');
                    input.setCustomValidity('One or more inputs do not match.');
                    // *returns a value to the function
                    // *and doesn't continue the function
                    return;
                }
                if(userForm.password == userForm.confirmpassword) {
                    axios.post("http://localhost:5000/users/login", userForm)
                        .then((res) => {
                            console.log(res.data);
                            // *.json({}) = res.data
                            // *then to access .json({data: result,}) = res.data.data 
                            // *setUser logs into an account
                            setUser(res.data.data);
                            setUserForm({
                                email: "",
                                username: "",
                                password: "",
                                confirmpassword: "",
                            });
                        });
                } else {
                    const input = document.getElementById('confirmpassword');
                    input.setCustomValidity('Password Must be Matching.');
                }
            });
    };

    useEffect(() => {}, []);

    return (
        // *method="post" is unnecessary b/c of e.preventDefault()
        <form onSubmit={onSubmit} className="form-body">
            <p className="form-title">Login Form</p>
            <div className="login-signup-main">
                <div className="login-signup-body">
                    <button id="login" className="login-signup-inner">
                        <Link className="no-decor login-signup-inner-color" to={"/login"}>Log-in</Link>
                    </button>
                    <button id="signup" className="login-signup-outer">
                        <Link className="no-decor login-signup-outer-color" to={"/signup"}>Sign-up</Link>
                    </button>
                </div>
                {/* <div className="form-animation-block" /> */}
            </div>
            <input type="email" placeholder="Email Address" id="email" name="email" className="form-box" value={userForm.email} onChange={inputsHandler} required></input>
            <input type="text" placeholder="Username" id="username" name="username" className="form-box" value={userForm.username} onChange={inputsHandler} required></input>
            <input type="password" placeholder="Password" id="password" name="password" className="form-box" value={userForm.password} onChange={inputsHandler} required></input>  
            <input type="password" placeholder="Confirm Password" id="confirmpassword" name="confirmpassword" className="form-box" value={userForm.confirmpassword} onChange={inputsHandler} required></input>        
            <div className="form-forgot-password-main">
                <a href="#" className="form-forgot-password">
                    <p>Forgot Password?</p>
                </a>
            </div>
            <button type="submit" className="form-login-button">
                <p>Login</p>     
            </button>
        </form>
    )
}

export default LoginPage;