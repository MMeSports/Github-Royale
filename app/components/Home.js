import React from 'react';
import { Link } from 'react-router';
import MainContainer from '../containers/MainContainer';

export default (props) => (
	<MainContainer>
		<h1>GitHub Battle</h1>
		<p className="lead">Some fancy motto</p>
		<Link to="/p1">
			<button type="button" className="btn btn-lg btn-success">
				Get started
			</button>
		</Link>
	</MainContainer>
)
