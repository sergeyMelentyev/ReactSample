import React from "react";
import Api from "../../utils/Api.js";

export default class Results extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		Api.fetchCompareUsers(["sergeyMelentyev", "yyx990803"])
		   .then(response => console.log(response));
	}
	render() {
		return (
			<div>Results are here</div>
		);
	}
};