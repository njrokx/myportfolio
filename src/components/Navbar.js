import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	setTimeout(() => {
		props.history.push('/about');
	}, 2000);
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a className="brand-logo">My Portfolio</a>
				<ul className="right">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
//nav link will show active when it is clicked so you can apply different styles to the active links

export default withRouter(Navbar);
//higher order component
