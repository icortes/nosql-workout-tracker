const mongoose = require('mongoose');
const {Schema} = mongoose;

const WorkoutSchema = new Schema({
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
  totalDuration: {
    type: Number,
  },
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
