const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
  duration: Number,
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
