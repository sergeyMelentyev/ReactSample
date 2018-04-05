import React from "react";
import Api from "../../utils/Api";
import queryString from "query-string";

export default class Results extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstProfile: new Object(),
			secondProfile: new Object()
		};
	}
	componentDidMount() {
		const queryStr = queryString.parse(this.props.location.search);
		const keys = Object.keys(queryStr);
		if (Array.isArray(keys) && keys.length != 2) return void 0;

		Api.fetchCompareUsers(new Array(queryStr.firstRepoName, queryStr.secondRepoName))
		   .then(response => {
		   		if (!(Array.isArray(response) && response.length)) return void 0;
				   	this.setState({
				   		firstProfile: response[0],
				   		secondProfile: response[1]
				   })
		   }).catch((err) => console.warn(err));
	}
	render() {
		return (
			<div className="results__compare-two-repos-container">
				{!this.state.firstProfile.score && <div>Loading...</div>}
				{this.state.firstProfile.score && 
					<ul>
						<li className="results__compare-two-repos-item">
							<h2>{this.state.firstProfile.profile.name}</h2>
							<img src={this.state.firstProfile.profile.avatar_url} />
							<p>Public Repos: {this.state.firstProfile.profile.public_repos}</p>
							<p>Followers: {this.state.firstProfile.profile.followers}</p>
						</li>
						<li className="results__compare-two-repos-item">
							<h2>{this.state.secondProfile.profile.name}</h2>
							<img src={this.state.secondProfile.profile.avatar_url} />
							<p>Public Repos: {this.state.secondProfile.profile.public_repos}</p>
							<p>Followers: {this.state.secondProfile.profile.followers}</p>
						</li>
					</ul>
				}
			</div>
		);
	}
};