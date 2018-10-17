const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

// declare app main
const app = express();

// BodyParser Middleware
app.use(bodyParser.json);

// db config
const db = require('./config/keys').mongoURI;

// connect to mongo

mongoose
    .connect(db)
    .then(() => console.log('Mongoose connect success ...'))
    .catch(err => console.log('ERROR connect !'));

// use Routes
app.use('my-route', items);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Connect to port ${port}`));