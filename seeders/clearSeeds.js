// Simple clear query to clear all seeds
let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

db.Workout.deleteMany({}).then(() => console.log('test'));