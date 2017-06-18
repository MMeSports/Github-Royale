import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import routes from './config/routes';

//var sentryDSN = "your-sentry-dsn";

var AppInfo = {
	name: "GitHub Battle",
	branch: "tip",
	version: "1.0"
};

/*
window.onerror = function() {
	Raven.showReportDialog();
}

Raven.config(sentryDSN, {
	release: AppInfo,
	tags: {
		branch: AppInfo.branch
	}
}).install();
*/

ReactDOM.render(routes, document.getElementById('app'));
