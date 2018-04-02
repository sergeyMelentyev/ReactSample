import React from "react";
import RepoInput from "./RepoInput.js";

class Compare extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstRepoName: "",
			firstRepoImage: "",
			secondRepoName: null,
			secondRepoImage: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(id, repoName) {
		this.setState(() => {
			var newState = new Object();
			Object.defineProperties(newState, {
	        	[id + "Name"]: {value: repoName, writable: true, enumerable: true, configurable: true},
	        	[id + "Image"]: {value: `https://github.com/${repoName}.png?size=200`, writable: true, enumerable: true, configurable: true}
			});
			return newState;
		});
	}
	render() {
		var firstRepoName = this.state.firstRepoName;
		var secondRepoName = this.state.secondRepoName;
		return (
			<div className="repoInputContainer">
				{!firstRepoName && 
					<RepoInput id="firstRepo" label="First Repository" onSubmit={this.handleSubmit} />}
				{!secondRepoName &&
					<RepoInput id="secondRepo" label="Second Repository" onSubmit={this.handleSubmit} />}
			</div>
		);
	}
}

export default Compare;
