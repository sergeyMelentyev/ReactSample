import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
	return (
		<ul className="nav">
			<li>
				<NavLink activeClassName="activeNavTab" exact to="/">
					Compare
				</NavLink>
				<NavLink activeClassName="activeNavTab" to="/popular">
					Popular
				</NavLink>
			</li>
		</ul>
	);
}

export default Nav;
