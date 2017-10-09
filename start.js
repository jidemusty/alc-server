import mongoose from 'mongoose';

// import environmental variables from our .env file
require('dotenv').config({ path: '.env' });

// connect to our database and handle any bad connections
mongoose.connect(process.env.DATABASE);
// tell mongoose to use ES6 promises
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`);
});

// import student model
// require('./models/Student');

// start our app!
import app from './config/app';

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});

module.exports = server;