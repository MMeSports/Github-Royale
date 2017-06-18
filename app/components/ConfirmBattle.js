import React from 'react';
import { Link } from 'react-router';
import styles from '../styles';
import UserDetailsBox from './UserDetailsBox';
import MainContainer from '../containers/MainContainer';
import Loading from './Loading';

const ConfirmBattle = (props) => (
	props.isLoading === true
	? <Loading speed={800} text="Waiting" />
	: <MainContainer>
		<h1>Confirm players</h1>
		<div className="col-sm-8 col-sm-offset-2">
			<UserDetailsBox header="Player 1" player={props.playersInfo[0]} />
			<UserDetailsBox header="Player 2" player={props.playersInfo[1]} />
		</div>
		<div className="col-sm-8 col-sm-offset-2">
			<div className="col-sm-12" style={styles.space}>
				<button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
					Battle!
				</button>
			</div>
			<div className="col-sm-12" style={styles.space}>
				<Link to="/p1">
					<button type="button" className="btn btn-lg btn-danger">
						Reselect players
					</button>
				</Link>
			</div>
		</div>
	</MainContainer>
)

ConfirmBattle.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playersInfo: React.PropTypes.array.isRequired,
	onInitiateBattle: React.PropTypes.func.isRequired
}

export default ConfirmBattle;
