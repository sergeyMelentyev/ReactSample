import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Header from "./Header.js";
require("./style/app.css");

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="appContainer">
					<Nav />
					<div className="routerContainer">
						<Switch>
							<Route exact path="/" component={Home} />
			                <Route path="/popular" component={Header} />
			                <Route render={() => <p>Not Found</p>} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
