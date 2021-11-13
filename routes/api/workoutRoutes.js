const {Types} = require('mongoose');
const {Workout, Exercise} = require('../../models');

const router = require('express').Router();

router.put('/:id', async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);
    const workout = await Workout.findOneAndUpdate(
      {_id: req.params.id},
      {$push: {exercise: Types.ObjectId(newExercise._id)}},
      {new: true}
    );
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router
  .route('/')
  .post(async (req, res) => {
    try {
      const newWorkout = await Workout.create(Date.now());
      res.status(200).json(newWorkout);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .get(async (req, res) => {
    try {
      const prevWorkouts = await Workout.find({});
      console.log(prevWorkouts);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
