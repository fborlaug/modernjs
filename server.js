// Dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');

// Setup
const app = express();
const port = 3000;

// Set up logging
app.use(morgan('dev'));

// Json - handling
app.use(bodyParser.json());

// Router
app.use('/tvshow', tvShowRouter);

app.get('/', (request, response) => response.send('Hello World'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Note the `` backticks is NOT the same as single quotes ''
});