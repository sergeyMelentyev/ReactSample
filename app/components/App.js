import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./Nav.js";
import Compare from "./compare/Compare.js";
import Popular from "./popular/Popular.js";
require("./style/app.css");

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="appContainer">
					<Nav />
					<div className="routerContainer">
						<Switch>
							<Route exact path="/" component={Compare} />
			                <Route path="/popular" component={Popular} />
			                <Route render={() => <p>Not Found</p>} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
