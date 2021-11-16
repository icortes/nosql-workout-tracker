const {Types} = require('mongoose');
const {Workout, Exercise} = require('../../models');
const router = require('express').Router();

router.put('/:id', async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);
    const workout = await Workout.findOneAndUpdate(
      {_id: req.params.id},
      {$push: {exercises: Types.ObjectId(newExercise._id)}},
      {new: true}
    );
    console.log(workout);
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get('/', (req, res) => {
  Workout.find({})
    .sort({day: -1})
    .limit(1)
    .populate('exercises')
    .then((dbWorkout) => {
      console.log(dbWorkout[0].exercises);
      let duration = 0;
      dbWorkout[0].exercises.forEach((exercise) => {
        duration += exercise.duration;
      });
      console.log(duration);
      dbWorkout[0].totalDuration = duration;
      console.log(dbWorkout);
      res.status(200).json(dbWorkout);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
});

router.post('/', (req, res) => {
  const date = Date.now();
  Workout.create({date})
    .then((dbWorkout) => {
      res.status(200).json(dbWorkout);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.get('/range', async (req, res) => {
  try {
    const workouts = await Workout.find({}).populate('exercises');
    res.status(200).json(workouts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
