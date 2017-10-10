import express from 'express';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import expressValidation from 'express-validation';
import errorHandlers from '../handlers/errorHandlers';

import routes from '../routes/index';

// create our express app
const app = express();

// Takes the raw request and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// After all that above middleware, we finally handle our own routes!
app.use('/api', routes);

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
      res.status(err.status).json(err);
    } else {
      res.status(500)
        .json({
          status: err.status,
          message: err.message
        });
    }
});

// mongodb://localhost:27017/alcserver
// mongodb://jidemusty:jidemustapha@ds115045.mlab.com:15045/alc-server
// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// done! we export it so we can start the site in start.js
module.exports = app;