// workout.js to keep things simple - follow group project structure (transaction.js)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// workout schema ////////////////////////////////////// need day & workouts/exercises (make workout data into an array)
const workoutSchema = new Schema({
    // //////////////////////////////////
    day: {
        type: Date,
        default: Date.now
    },
    // /////////////////////////////////// pluck from seed file 
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please input an exercise type" // cardio / resistance
            },
            name: {
                type: String,
                trim: true,
                required: "Please input an exercise name"
            },
            duration: {
                type: Number,
                required: "Please enter the duration you wish for the exercise"
            },
            // resistance 
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            // cardio
            distance: {
                type: Number,
            },
        },
    ],
    // had to get help with this part
    totalDuration: {
        type: Number,
      },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;