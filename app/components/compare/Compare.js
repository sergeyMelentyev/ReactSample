import React from "react";
import RepoInput from "./RepoInput.js";
import RepoPreview from "./RepoPreview.js";
import {Link} from "react-router-dom";

export default class Compare extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstRepoName: "",
			firstRepoImage: "",
			secondRepoName: null,
			secondRepoImage: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
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
	handleReset(id) {
		this.setState(() => {
			var newState = new Object();
			Object.defineProperties(newState, {
	        	[id + "Name"]: {value: "", writable: true, enumerable: true, configurable: true},
	        	[id + "Image"]: {value: null, writable: true, enumerable: true, configurable: true}
			});
			return newState;
		});
	}
	render() {
		var firstRepoName = this.state.firstRepoName;
		var firstRepoImage = this.state.firstRepoImage;
		var secondRepoName = this.state.secondRepoName;
		var secondRepoImage = this.state.secondRepoImage;
		return (
			<div className="compare__user-input-and-results-container">
				<div className="compare__user-input-container">
					{
						firstRepoName ? (
							<RepoPreview id="firstRepo" name={firstRepoName} image={firstRepoImage} onReset={this.handleReset} />
						) : (
							<RepoInput id="firstRepo" label="First Repository" onSubmit={this.handleSubmit} />
						)
					}
					{
						secondRepoName ? (
							<RepoPreview id="secondRepo" name={secondRepoName} image={secondRepoImage} onReset={this.handleReset} />
						) : (
							<RepoInput id="secondRepo" label="Second Repository" onSubmit={this.handleSubmit} />
						)
					}
				</div>
				{
					firstRepoImage && secondRepoImage && <Link to="/" className="compare__show-final-results">Show results</Link>
				}
			</div>
		);
	}
};