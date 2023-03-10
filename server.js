const express = require('express');
// require('express-group-routes');

const app = express();

// Body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
	app
		.use('/api/v1', require('./routes/reservation'));

	app.listen(6500, () => console.log('Server started: 6500'));
} catch (error) {
	console.log('error', error);
}
