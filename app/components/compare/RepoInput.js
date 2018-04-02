import React from "react";

export default class RepoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
    	this.setState({name: event.target.value});
  	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.props.id, this.state.name);
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="repoInput">
				<label>{this.props.label}
					<input value={this.state.name} onChange={this.handleChange}
						   type="text" placeholder="github username" autoComplete="off" />
				</label>
				<input type="submit" value="Submit" disabled={!this.state.name} />
			</form>
		);
	}
};