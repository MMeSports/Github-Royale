// rc + tab
var React = require('react');
var Prompt = require('../components/Prompt');


var PromptContainer = React.createClass({

	contextTypes: {
		// dont have to pass the router down as props with context
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
	    return {
	      username: ''
	    }
  },

	handleUpdateUser: function (e) {
		this.setState({
			username: e.target.value
		})
	},

	handleSubmitUser: function (e) {
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			// go to /battle
			this.context.router.push({
				// object which passes in a query, pathname and state
				pathname: '/battle',
				query: {
					// passing information along to our battle route
					playerOne: this.props.routeParams.playerOne,
					// already living on our current state
					playerTwo: this.state.username
				}
			})
		} else {
			// go to /playerTwo route
			// setting the playerOne username into the URL
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	},

	render: function() {
		return (
			<Prompt 
			onSubmitUser={this.handleSubmitUser}
			onUpdateUser={this.handleUpdateUser}
			header={this.props.route.header}
			username={this.state.username}
			/>
		)
	}

});

module.exports = PromptContainer;