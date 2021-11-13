const mongoose = require('mongoose');

const Schema = new mongoose.Schema();

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    // validator that checks if the value/s is/are in the given array
    enum: {
      values: ['cardio', 'resistance'],
      message: '{VALUE} is not supported',
    },
  },
  name: {
    type: String,
    trim: true,
  },
  distance: {
    type: Number,
    // validates if input is an integer
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  duration: {
    type: Number,
    // validates if input is an integer
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  weight: {
    type: Number,
    // validates if input is an integer
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  sets: {
    type: Number,
    // validates if input is an integer
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  reps: {
    type: Number,
    // validates if input is an integer
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
});
