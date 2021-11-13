const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
  duration: Number,
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
