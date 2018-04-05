import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Compare from "./compare/Compare";
import Results from "./compare/Results";
import Popular from "./popular/Popular";
import "./style/app.css";

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app__main-container">
					<Nav />
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/compare" component={Compare} />
							<Route path="/compare/results" component={Results} />
			                <Route path="/popular" component={Popular} />
			                <Route render={() => <p>Not Found</p>} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
};