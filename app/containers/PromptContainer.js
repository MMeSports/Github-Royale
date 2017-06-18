import React from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			username: ""
		};
		this.handleSubmitUser = this.handleSubmitUser.bind(this);
		this.handleUpdateUser = this.handleUpdateUser.bind(this);
	}
	handleSubmitUser(ev) {
		ev.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ""
		});
		if (this.props.routeParams.p1) {
			this.context.router.push({
				pathname: "/battle",
				query: {
					p1: this.props.routeParams.p1,
					p2: this.state.username
				}
			})
		} else {
			this.context.router.push("/p2/" + this.state.username)
		}
	}
	handleUpdateUser(ev) {
		this.setState({
			username: ev.target.value
		});
	}
	render() {
		return <Prompt
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
				header={this.props.route.header}
				username={this.state.username} />
	}
}

PromptContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default PromptContainer;
