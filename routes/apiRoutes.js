const mongoose = require("mongoose")
const db = require("../models");
const Workout = require('../models/Workout')
// ////////////////////////////////////////
const router = require('express').Router()

// routes - get, post, put ---------------------------------- look up aggrigate 
// gets all workout data
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ date: -1 }) //date parameter in workout.js
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// charts on /stats page
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }, //seeds
        totalWeight: { $sum: "$exercises.weight" }, //seeds
      },
    },
  ])
    .limit(7) // 7 days in the week
    .sort({ date: -1 }) //date parameter in workout.js
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// creates a new workout to the database
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      console.log(dbWorkout);

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


// updated exercises // pull from workout.js in models folder
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true })
    //   {
    //     $push: {exercises: req.body}
    // },
    // {
    //     new: true
    // })

    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});



module.exports = router;