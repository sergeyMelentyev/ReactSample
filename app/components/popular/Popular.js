import React from "react";
import Api from "../../utils/Api.js";
require("../style/header.css");

function CurrentTab(props) {
	const navigationItems = new Array("All", "Javascript");
	return (
		<ul className="navigationBar">
			{navigationItems.map((item, index) => {
				return (
					<li onClick={props.onSelect.bind(null, item)}
						key={index}
						style={item === props.currentTab ? { fontWeight: "bold"} : null}>
						{item}
					</li>
				);
			})}
		</ul>
	);
}
function RepoGrid(props) {
	if (props.hasOwnProperty("repositories")
		&& Array.isArray(props.repositories)
		&& props.repositories.length) {
		return (
			<ul className="reposContainer">
				{props.repositories.map((repo, index) => {
					return (
						<li key={repo.id}>
							<div className="popularRank">#{index + 1}</div>
							<img className="avatar" src={repo.owner.avatar_url}></img>
							<a className="repoName" href={repo.html_url}>{repo.name}</a>
							<div className="repoStars">{repo.stargazers_count} stars</div>
						</li>
					);
				})}
			</ul>
		);
	} else {
		return <div>Loading...</div>
	}
}

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: "All",
			repositories: undefined
		};
		this.updateCurrentTab = this.updateCurrentTab.bind(this);
	}
	updateCurrentTab(newTab) {
		Api.fetchPopularRepos(newTab)
			.then(result => this.setState({currentTab: newTab, repositories: result}));
	}
	componentDidMount() {
		this.updateCurrentTab(this.state.currentTab);
	}
	render() {
		return (
			<div>
				<CurrentTab currentTab={this.state.currentTab} onSelect={this.updateCurrentTab} />
				<RepoGrid repositories={this.state.repositories} />
			</div>
		);
	}
}

export default Popular;
