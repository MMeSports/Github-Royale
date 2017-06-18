import React from 'react';
import styles from '../styles';

export default (props) => (
	<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
		{props.children}
	</div>
)
