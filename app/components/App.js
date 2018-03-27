var React = require("react");
var Header = require("./Header.js");

class App extends React.Component {
	render() {
		return (
			<div className="appContainer">
				<Header />
			</div>
		);
	}
}

module.exports = App;
