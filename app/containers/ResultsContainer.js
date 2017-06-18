import React from 'react';
import Results from '../components/Results';
import GitHub from '../utils/GitHub';

class ResultsContainer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isLoading: false,
			scores: []
		};
	}
	componentDidMount() {
		GitHub.battle(this.props.location.state.playersInfo).
			then(function(scores) {
				this.setState({
					scores: scores,
					isLoading: false
				});
			}.bind(this)).
			catch(function(err) {
				console.warn("github battle error:", err);
			});
	}
	render() {
		return <Results
				isLoading={this.state.isLoading}
				playersInfo={this.props.location.state.playersInfo}
				score={this.state.scores} />
	}
}

ResultsContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ResultsContainer;
