import React from 'react';
import UserDetails from './UserDetails';

const UserDetailsBox = (props) => (
	<div className="col-sm-6">
		<p className="lead">{props.header}</p>
		<UserDetails score={props.score} info={props.player} />
	</div>
)

UserDetailsBox.propTypes = {
	header: React.PropTypes.string.isRequired,
	player: React.PropTypes.object.isRequired,
	score: React.PropTypes.number
}

export default UserDetailsBox;
