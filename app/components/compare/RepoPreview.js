import React from "react";

export default function RepoPreview(props) {
	return (
		<div className="repo-preview__external-container">
			<h2>@{props.name}</h2>
			<img src={props.image} />
			<button onClick={props.onReset.bind(null, props.id)}>Reset</button>
		</div>
	);
};