const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const DB = require('./db');
const db = new DB();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const numVerifyRoutes=require('./routers/numverify');


app.use('/nodeApi', numVerifyRoutes);

// app.get('/', (request, response,next) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello World Bitches');
// });
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;
