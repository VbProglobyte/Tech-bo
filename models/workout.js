// workout.js to keep things simple 
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// workout schema ////////////////////////////////////// need day & workouts/exercises (make workout data into an array)
const workoutSchema = new Schema({
    // //////////////////////////////////
    day: {
        type: Date,
        default: Date.now
    },
    // ///////////////////////////////////
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please input an exercise type" // cardio / resistence
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
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;