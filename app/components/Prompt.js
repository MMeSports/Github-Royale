import React from 'react';
import MainContainer from '../containers/MainContainer';

const Prompt = (props) => (
	<MainContainer>
		<h1>{props.header}</h1>
		<div className="col-sm-12">
			<form onSubmit={props.onSubmitUser}>
				<div className="form-group">
					<input
						className="form-control"
						onChange={props.onUpdateUser}
						placeholder="Github username"
						type="text"
						value={props.username} />
				</div>
				<div className="form-group col-sm-4 col-sm-offset-4">
					<button type="submit" className="btn btn-block btn-success">
						Continue
					</button>
				</div>
			</form>
		</div>
	</MainContainer>
)

Prompt.propTypes = {
	onSubmitUser: React.PropTypes.func.isRequired,
	onUpdateUser: React.PropTypes.func.isRequired,
	header: React.PropTypes.string.isRequired,
	username: React.PropTypes.string.isRequired
}

export default Prompt;
