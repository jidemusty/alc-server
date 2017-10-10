import mongoose from 'mongoose';
import config from './config/environments';

// import environmental variables from our .env file
require('dotenv').config({ path: '.env' });

// connect to our database and handle any bad connections
mongoose.connect(config.default.db);

// tell mongoose to use ES6 promises
mongoose.Promise = global.Promise

mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`);
});

mongoose.connection.on('connected', () => {
    console.log(`Connected to database: ${config.default.db}`);
});

if (config.env === 'development') {
    mongoose.set('debug', true);
}

// start our app!
import app from './config/app';

app.set('port', config.default.port);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});

module.exports = server;