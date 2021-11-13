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
    res.status(400).json(error);
  }
});

router.get('/', (req, res) => {
  Workout.find({})
    .sort({date: -1})
    .limit(1)
    .populate('exercise')
    .then((dbWorkout) => {
      res.status(200).json(dbWorkout);
    })
    .catch((error) => {
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
module.exports = router;
