import React from "react";
import {NavLink} from "react-router-dom";
import "./style/app.css";

function Nav() {
	return (
		<ul className="nav">
			<li>
				<NavLink activeClassName="activeNavTab" exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="activeNavTab" to="/compare">
					Compare
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="activeNavTab" to="/popular">
					Popular
				</NavLink>
			</li>
		</ul>
	);
}

export default Nav;