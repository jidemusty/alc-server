import express from 'express';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import errorHandlers from './handlers/errorHandlers';

import routes from './routes/index';

// create our express app
const app = express();

// Takes the raw request and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Exposes a bunch of methods for validating data.
app.use(expressValidator());

// After all that above middleware, we finally handle our own routes!
app.use('/api', routes);


// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// done! we export it so we can start the site in start.js
module.exports = app;