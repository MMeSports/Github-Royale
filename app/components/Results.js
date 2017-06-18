import React from 'react';
import { Link } from 'react-router';
import styles from '../styles';
import UserDetailsBox from './UserDetailsBox';
import MainContainer from '../containers/MainContainer';
import Loading from './Loading';

const StartOver = (props) => (
	<div className="col-sm-12" style={styles.space}>
		<Link to="/p1">
			<button type="button" className="btn btn-lg btn-danger">Start over</button>
		</Link>
	</div>
)

const Results = (props) => {
	if (props.isLoading) {
		return <Loading />
	}
	var tie = "";
	if (props.score[0] === props.score[1]) {
		tie = <h2>It&#39;s a tie!</h2>
	}
	var winningIndex = props.score[0] > props.score[1] ? 0 : 1;
	var losingIndex = winningIndex === 0 ? 1 : 0;
	return (
		<MainContainer>
			<h1>Results</h1>
			{tie}
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsBox header="Winner" score={props.score[winningIndex]} player={props.playersInfo[winningIndex]} />
				<UserDetailsBox header="Loser" score={props.score[losingIndex]} player={props.playersInfo[losingIndex]} />
			</div>
			<StartOver />
		</MainContainer>
	)
}

Results.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playersInfo: React.PropTypes.array.isRequired,
	score: React.PropTypes.array.isRequired
}

export default Results;
