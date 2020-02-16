// npm modules
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// create express app
const app = express();

// disable cors because mask off
app.use(cors());

// setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup routes
const submit = require('./routes/submit.routes');
app.use('/submit', submit);

// start express app
app.listen(9001, () => {
  console.log('Listening on 9001');
})
