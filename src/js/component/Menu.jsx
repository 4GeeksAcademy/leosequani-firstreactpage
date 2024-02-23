import React from "react";

//create your first component
const Navbar = () => { 
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
		<div className="container-fluid bg-secondary">
		  <a className="navbar-brand ms-5" href="#">Navbar</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse me-5" id="navbarNav">
			<ul className="navbar-nav">
			  <li className="nav-item">
				<a className="nav-link" href="#">Home</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Features</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Pricing</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Pricing</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
};

export default Navbar;
