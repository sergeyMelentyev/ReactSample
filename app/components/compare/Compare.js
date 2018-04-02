import React from "react";
import RepoInput from "./RepoInput.js";

class Compare extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstRepoName: undefined,
			firstRepoImage: undefined,
			secondRepoName: undefined,
			secondRepoImage: undefined
		};
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(id, repoName) {
		this.setState(() => {
			var newState = new Object();
			Object.defineProperties(newState, {
	        	[id + "Name"]: {value: repoName},
	        	[id + "Image"]: {value: `https://github.com/${repoName}.png?size=200`}
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
					<RepoInput id={firstRepoName} label="First Repository" onSubmit={this.onSubmit} />}
				{!secondRepoName &&
					<RepoInput id={secondRepoName} label="Second Repository" onSubmit={this.onSubmit} />}
			</div>
		);
	}
}

export default Compare;
