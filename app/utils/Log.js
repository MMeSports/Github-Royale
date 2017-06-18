import Raven from 'raven-js';

class Log {
	Error(message, context) {
		Ravel.captureMessage(message, {
			level: 'error',
			extra: context
		});
	}
}

export default Log;
