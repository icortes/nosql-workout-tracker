const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {useNewUrlParser: true},
  {useUnifiedTopology: true}
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
