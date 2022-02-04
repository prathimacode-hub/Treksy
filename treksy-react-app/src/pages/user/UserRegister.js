import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/UserRegister.css";

export default function UserRegister() {
	const [credentials, setCredentials] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		address: "",
		pin: "",
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

			<div id="userRegister">
				<div id="form-container">
					<h2>Register Now!</h2>
					<form onSubmit={handleSubmit}>
						<div id="name">
							<div className="form-group">
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									name="firstName"
									value={credentials.firstName}
									onChange={handleOnChange}
									placeholder="First name"
                                    required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									name="lastName"
									value={credentials.lastName}
									onChange={handleOnChange}
									placeholder="Last name"
                                    required
								/>
							</div>
						</div>
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
						<div className="form-group">
							<label htmlFor="address">Address</label>
							<textarea
								className="form-control"
								id="address"
								name="address"
								value={credentials.address}
								onChange={handleOnChange}
								rows="2"
								placeholder="Address"
                                required
							></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="pin">PIN Code</label>
							<input
								type="text"
								className="form-control"
								id="pin"
								name="pin"
								value={credentials.pin}
								onChange={handleOnChange}
								placeholder="Pincode"
                                required
							/>
						</div>
						<div id="links">
							<button className="btn" type="submit">
								Sign Up
							</button>
							<p>
								{/* Insert path to /user/login here when the page is up */}
								Already have an account? <Link to="/login">Sign In</Link>
							</p>
						</div>
					</form>
				</div>
			</div>

            {/* Footer */}
		</>
	);
}
