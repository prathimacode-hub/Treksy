import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/UserLogin.css";

export default function UserLogin() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(credentials);
        console.log("Form submitted");
    };

    return (
        <>
            {/* Navbar */}

            <div id="userLogin">
                <div id="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleOnChange}
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleOnChange}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div id="action">
                            <div className="form-group">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember Me</label>
                            </div>
                            <div className="form-group">
                                <p><Link to="">Forgot password</Link></p>
                            </div>
                        </div>
                        <div id="links">
                            <button className="btn" type="submit">
                                Sign In
                            </button>
                            <p>
                                {/* Insert path to /user/login here when the page is up */}
                                Do not have an account? <Link to="/register">Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
        </>
    );
}
