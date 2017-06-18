import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import GitHub from '../utils/GitHub';

class ConfirmBattleContainer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isLoading: true,
			playersInfo: []
		};
		this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
	}
	componentDidMount() {
		var query = this.props.location.query;
		GitHub.getPlayersInfo([query.p1, query.p2]).
			then(function(players) {
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				});
			}.bind(this));
	}
	handleInitiateBattle() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		});
	}
	render() {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
				onInitiateBattle={this.handleInitiateBattle} />
		)
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
