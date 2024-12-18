import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar px-3">
			<Link to="/">
				<button className="btn btn-primary"><i className="bi bi-house"></i></button>
			</Link>
			<p className="h3">Contact List</p>
			<div className="ml-auto">
				<Link to="/form">
					<button className="btn btn-success"><i className="bi bi-person-add"></i></button>

				</Link>
			</div>
		</nav>
	);
};
